import userModel from "../models/userModel.js";
import { hashPassword, comparedPassword } from "../helpers/authHelper.js";
import JWT from "jsonwebtoken";

export const registrationController = async (req, res) => {
  try {
    const { name, email, password, phone, address, answer } = req.body;
    const existingUser = await userModel.findOne({ email });

    if (existingUser) {
      return res.status(409).send({
        success: false,
        message: "User already exists, Please choose a different email.",
      });
    }

    const hashedPassword = await hashPassword(password);
    const user = await new userModel({
      name,
      email,
      password: hashedPassword,
      phone,
      address,
      answer
    }).save();

    res.status(201).send({
      success: true,
      message: "Registered",
      user,
    });
  } catch (err) {
    res.status(500).send({
      success: false,
      message: "Registration error",
      error: err.message,
    });
  }
};

export const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await userModel.findOne({ email });
    const match = await comparedPassword(password, user.password);
    if (!user || !match) {
      return res.status(409).send({
        success: false,
        message: "Invalid User or Pasword",
      });
    }
    const token = JWT.sign({ _id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });

    res.status(200).send({
      success: true,
      message: "login Successfully Done",
      user: { name: user.name, email: user.email, role: user.role, phone:user.phone },
      token,
    });
  } catch (err) {}
};

export const testController = (req, res) => {
  res.send({ message: "Protected Called!!" });
};



//forget-passwrord

export const forgotPasswordController = async (req, res) => {
  try {
    const { email, answer, newPassword } = req.body;
    if (!email) {
      res.status(400).send({ message: "Emai is required" });
    }
    if (!answer) {
      res.status(400).send({ message: "answer is required" });
    }
    if (!newPassword) {
      res.status(400).send({ message: "New Password is required" });
    }
    //check
    const user = await userModel.findOne({ email, answer });
    //validation
    if (!user) {
      return res.status(404).send({
        success: false,
        message: "Wrong Email Or Answer",
      });
    }
    const hashed = await hashPassword(newPassword);
    await userModel.findByIdAndUpdate(user._id, { password: hashed });
    res.status(200).send({
      success: true,
      message: "Password Reset Successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Something went wrong",
      error,
    });
  }
};
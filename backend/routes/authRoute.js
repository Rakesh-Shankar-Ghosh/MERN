import express from "express";

import {
  registrationController,
  loginController,
  testController,
  forgotPasswordController,
} from "../controllers/authController.js";

import {
  requireSignIn,
  isAdmin,
  isUser,
} from "../middlewares/authMiddleware.js";

const router = express.Router();

// rgistration
router.post("/register", registrationController);

// Login
router.post("/login", loginController);

//forget-password
router.post("/forgot-password", forgotPasswordController);

// proteted Route
router.get("/test", requireSignIn, isAdmin, testController);

//protected User route auth
router.get("/user-auth", requireSignIn, isUser, (req, res) => {
  res.status(200).send({ ok: true });
});

//protected Admin route auth
router.get("/admin-auth", requireSignIn, isAdmin, (req, res) => {
  res.status(200).send({ ok: true });
});

export default router;

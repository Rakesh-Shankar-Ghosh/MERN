import React, { useState } from "react";
import Layout from "../../components/Layout/Layout";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [answer, setAnswer] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formdata = {
      name,
      email,
      password,
      phone,
      address,
      answer
    };
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_API}/api/v1/auth/register`,
        formdata
      );
      if (res.data.success) {
        navigate("/login");
      }
      console.log(res.data.message);
    } catch (err) {
      console.log(err);
    }

   
  };
  return (
    <>
      <Layout>
        <div className="text-center">
          <form onSubmit={handleSubmit}>
            <div className="input-box">
              Name:{" "}
              <input
                type="text"
                placeholder="Enter your name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="input-box">
              Email:{" "}
              <input
                type="email"
                placeholder="Enter your email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="input-box">
              Password:{" "}
              <input
                type="password"
                placeholder="Create password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="input-box">
              Phone:{" "}
              <input
                type="text"
                placeholder="Phone"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <div className="input-box">
              Address:{" "}
              <input
                type="text"
                placeholder="Address"
                required
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>
            <div className="input-box">
              Answer:{" "}
              <input
                type="text"
                placeholder="Favorite Pet"
                required
                value={answer}
                onChange={(e) => setAnswer(e.target.value)}
              />
            </div>

            <div className="input-box button">
              <input type="Submit" defaultValue="Register Now" />
            </div>
          </form>
        </div>
      </Layout>
    </>
  );
};

export default Register;

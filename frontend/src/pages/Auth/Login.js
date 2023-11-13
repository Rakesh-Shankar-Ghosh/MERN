import React, { useState } from "react";
import Layout from "../../components/Layout/Layout";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../components/context/auth";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [auth, setAuth] = useAuth();

  const navigate = useNavigate();
  // const location = useLocation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formdata = {
      email,
      password,
    };
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_API}/api/v1/auth/login`,
        formdata
      );

      if (res.data.success) {
        setAuth({
          ...auth,
          user: res.data.user,
          token: res.data.token,
        });
        console.table("Form data",auth)
        localStorage.setItem("auth", JSON.stringify(res.data));
        navigate("/");
      }
    } catch (err) {
      console.log(err);
    }

    console.log(email, password);
  };
  return (
    <>
      <Layout>
        <div className="text-center">
          <form onSubmit={handleSubmit}>
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

            <div className="mb-3">
              <button
                type="button"
                className="btn forgot-btn"
                onClick={() => {
                  navigate("/forgot-password");
                }}
              >
                Forgot Password
              </button>
            </div>

            <div className="input-box button">
              <input type="Submit" defaultValue="Login" />
            </div>
          </form>
        </div>
      </Layout>
    </>
  );
};

export default Login;

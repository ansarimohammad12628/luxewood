import React, { useState, useEffect } from "react";
import "../Css/LoginPage.css";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";

const LoginPage = ({ setIsLoggedIn }) => {
  const navigate = useNavigate();
  const [cookies, setCookie] = useCookies(["user"]);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (cookies.user) {
      setIsLoggedIn(true);
      navigate("/home");
    }
  }, [cookies, navigate, setIsLoggedIn]);

  const handleLogin = () => {
    if (username === "corecode" && password === "00000000") {

      const expireTime = new Date();
      expireTime.setMinutes(expireTime.getMinutes() + 3);
      setCookie("user", username, { path: "/", expires: expireTime });
      setIsLoggedIn(true);
      navigate("/home");
    } else {
      alert("Wrong username or password!");
    }
  };

  return (
    <div className="login-page">
      <div className="login-box">
        <div className="login-text">Login</div>

        <div className="input-group">
          <input
            type="text"
            placeholder="Username or Email"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div className="input-group">
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button className="login-btn" onClick={handleLogin}>
          Login
        </button>

        <p className="login-footer">
          Don’t have an account? <a href="#">Sign Up</a>
        </p>
        <div className="login-text-2">
          username: <span>corecode</span>
        </div>
        <div className="login-text-2">
          password: <span>00000000</span>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

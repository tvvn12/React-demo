import React, { useState } from "react";
import "./Login.scss";
const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = () => {
    console.log("logibn");
  };
  return (
    <div className="login-container ">
      <div className="header">
        <span>Don't have an account yet?</span>
        <button>Sign Up</button>
      </div>
      <div className="title col-4 mx-auto">Hoi Dan IT</div>
      <div className="welcome col-4 mx-auto">Hello, who's this?</div>
      <div className="content-form  col-4 mx-auto">
        <div className="form-group">
          <label htmlFor="">Email</label>
          <input
            type="email"
            name=""
            id=""
            className="form-control"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="">Password</label>
          <input
            type="password"
            name=""
            id=""
            className="form-control"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        <span className="forgot-password">Forgot password?</span>
        <div className="">
          <button onClick={() => handleLogin()} className="btn-submit">
            Login to Hoi Dan IT
          </button>
        </div>
        <div className="">
          <span>Go to home page</span>
        </div>
      </div>
    </div>
  );
};

export default Login;

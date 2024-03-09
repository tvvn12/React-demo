import React from "react";
import "./Login.scss";
const Login = (props) => {
  return (
    <div className="login-container">
      <div className="header">Don't have an account yet?</div>
      <div className="title"></div>
      <div className="welcome">Hello, who's this?</div>
      <div className="content-form">
        <div className="form-group">
          <label htmlFor="">Email</label>
          <input type="email" name="" id="" />
        </div>
      </div>
    </div>
  );
};

export default Login;

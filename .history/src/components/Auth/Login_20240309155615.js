import React from "react";
import "./Login.scss";
const Login = (props) => {
  return (
    <div className="login-container o">
      <div className="header">Don't have an account yet?</div>
      <div className="title col-4 mx-auto">Hoi Dan IT</div>
      <div className="welcome  col-4 mx-auto">Hello, who's this?</div>
      <div className="content-form  col-4 mx-auto">
        <div className="form-group">
          <label htmlFor="">Email</label>
          <input type="email" name="" id="" className="form-control" />
        </div>
      </div>
    </div>
  );
};

export default Login;

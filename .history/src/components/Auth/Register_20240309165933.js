import React from "react";
import "./Register.scss";
const Register = () => {
  return (
    <div className="register-container">
      <div className="header">
        <div className="title-header-content">
          <h3>Tuong Vinh</h3>
        </div>
        <div className="title-header-action">
          <button>Log in</button>
        </div>
      </div>
      <div className="form-register">
        <div className="content-form  col-4 mx-auto">
          <div className="form-group">
            <label htmlFor="">Email</label>
            <input type="email" name="" id="" className="form-control" />
          </div>
          <div className="form-group">
            <label htmlFor="">Password</label>
            <input type="password" name="" id="" className="form-control" />
          </div>
          <span className="forgot-password">Forgot password?</span>
          <div className="">
            <button className="btn-submit">Login to Hoi Dan IT</button>
          </div>
          <div className="text-center">
            <span className="back">&#60;&#60; Go to home page</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;

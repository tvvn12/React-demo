import React, { useState } from "react";
import "./Register.scss";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { postRegister } from "../../services/apiServices";
const Register = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const handleRegitser = async () => {
    const requiredEmail = validateEmail(email);
    if (!requiredEmail) {
      toast.error("Invalid Email");
      return;
    }
    if (!password) {
      toast.error("Required Password");
      return;
    }
    let data = await postRegister(email, password, username);
    if (data && data.DT && data.EC === 0) {
      toast.success(data.EM);
      // navigate("/login");
      console.log(data);
    }
    if (data && +data.EC !== 0) {
      toast.error(data.EM);
    }
  };
  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

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
          <div className="form-group">
            <label htmlFor="">User Name</label>
            <input
              type="text"
              name=""
              id=""
              className="form-control"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
            />
          </div>
          {/* <span className="forgot-password">Forgot password?</span> */}
          <div className="">
            <button className="btn-submit" onClick={() => handleRegitser()}>
              Register to Hoi Dan IT
            </button>
          </div>
          <div className="text-center">
            <span
              className="back"
              onClick={() => {
                navigate("/");
              }}
            >
              &#60;&#60; Go to home page
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;

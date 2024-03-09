import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const ManageUser = () => {
  return (
    <div className="manage-user-container">
      <div className="title">Manage User</div>
      <div className="user-content">
        <button>Add new user</button>
      </div>
      <div className="">
        Table User
        <Example />
      </div>
    </div>
  );
};

export default ManageUser;

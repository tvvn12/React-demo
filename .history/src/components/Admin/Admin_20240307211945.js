import React from "react";
import SideBarNav from "../Admin/SideBar";
import "./Admin.scss";
const Admin = () => {
  return (
    <div className="admin-container">
      <div className="admin-sidebar">
        <SideBarNav></SideBarNav>
      </div>
      <div className="admin-content">abc</div>
    </div>
  );
};

export default Admin;

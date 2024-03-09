import React, { useState } from "react";
import SideBarNav from "../Admin/SideBar";
import "./Admin.scss";
import { FaBars } from "react-icons/fa";
const Admin = () => {
  const [collapsed, setCollapsed] = useState();
  return (
    <div className="admin-container">
      <div className="admin-sidebar">
        <SideBarNav></SideBarNav>
      </div>
      <div className="admin-content">
        <FaBars />
      </div>
    </div>
  );
};

export default Admin;

import React, { useState } from "react";
import SideBarNav from "../Admin/SideBar";
import "./Admin.scss";
import { FaBars } from "react-icons/fa";
const Admin = () => {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <div className="admin-container">
      <div className="admin-sidebar">
        <SideBarNav collapsed={collapsed}></SideBarNav>
      </div>

      <div className="admin-content">
        <div className="admin-header"></div>
        <div className="admin-main"></div>
        <FaBars onClick={() => setCollapsed(!collapsed)} />
      </div>
    </div>
  );
};

export default Admin;

import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
const Layout = (props) => {
  return (
    <>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/users" element={<User />} />
          <Route index element={<HomePage />} />
        </Route>
        <Route path="/admins" element={<Admin />}>
          <Route index element={<Dashboard />} />
          <Route path="manage-users" element={<ManageUser />} />
        </Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </>
  );
};

export default Layout;

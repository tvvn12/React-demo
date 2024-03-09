import React, { useState } from "react";

const TableUser = (props) => {
  const [listUser, setListUser] = useState([
    {
      id: 5,
      username: "eric",
      email: "hoidanit@gmail.com",
      role: "USER",
    },
    {
      id: 6,
      username: "eric2",
      email: "hoidanit@gmail.com2",
      role: "USER",
    },
  ]);
  return (
    <>
      <table class="table table-hover table-bordered">
        <thead>
          <tr>
            <th scope="col">No</th>
            <th scope="col">User Name</th>
            <th scope="col">Email</th>
            <th scope="col">Role</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default TableUser;

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
      <table className="table table-hover table-bordered">
        <thead>
          <tr>
            <th scope="col">No</th>
            <th scope="col">User Name</th>
            <th scope="col">Email</th>
            <th scope="col">Role</th>
          </tr>
        </thead>
        <tbody>
          {listUser &&
            listUser.length > 0 &&
            listUser.map((item, index) => {
              return (
                <tr key={item.id}>
                  <th scope="row">{index + 1}</th>
                  <td>{item.email}</td>
                  <td>{item.username}</td>
                  <td>{item.role}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </>
  );
};

export default TableUser;

import React, { useState } from "react";
import AddUserInfo from "./AddUserInfor";
import DisplayInfo from "./DisplayInfo";

// class MyComponent extends React.Component {
//   state = {
//     listUsers: [
//       {
//         id: 1,
//         name: "Hoi",
//         age: "30",
//       },
//       {
//         id: 2,
//         name: "Hoi2",
//         age: "30",
//       },
//       {
//         id: 3,
//         name: "Hoi3",
//         age: "30",
//       },
//     ],
//   };
//   handleAddNew = (userObj) => {
//     this.setState({
//       listUsers: [userObj, ...this.state.listUsers],
//     });
//   };
//   handleDelete = (userId) => {
//     let listUserClone = [...this.state.listUsers];
//     listUserClone = listUserClone.filter((item) => item.id !== userId);
//     this.setState({
//       listUsers: listUserClone,
//     });
//   };
//   render() {
//     return (
//       <div>
//         <AddUserInfo handleAddNew={this.handleAddNew} />
//         <br />
//         <br />

//         <DisplayInfo
//           users={this.state.listUsers}
//           delete={this.handleDelete}
//         ></DisplayInfo>
//       </div>
//     );
//   }
// }

import React from "react";

const MyComponent = () => {
  const [listUsers, setListUser] = useState({
    listUsers: [
      {
        id: 1,
        name: "Hoi",
        age: "30",
      },
      {
        id: 2,
        name: "Hoi2",
        age: "30",
      },
      {
        id: 3,
        name: "Hoi3",
        age: "30",
      },
    ],
  });
  handleAddNew = (userObj) => {
    setListUser({
      listUsers: [userObj, ...this.state.listUsers],
    });
  };
  handleDelete = (userId) => {
    let listUserClone = [...this.state.listUsers];
    listUserClone = listUserClone.filter((item) => item.id !== userId);
    setListUser({
      listUsers: listUserClone,
    });
  };
  return (
    <div>
      // <AddUserInfo handleAddNew={this.handleAddNew} />
      // <br />
      // <br />
      //{" "}
      <DisplayInfo
        users={this.state.listUsers}
        delete={this.handleDelete}
      ></DisplayInfo>
    </div>
  );
};

export default MyComponent;

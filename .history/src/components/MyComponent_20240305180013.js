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

const MyComponent = () => {
  const [listUsers, setListUser] = useState([
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
  ]);
  const handleAddNew = (userObj) => {
    setListUser([userObj, ...listUsers]);
  };
  const handleDelete = (userId) => {
    let listUserClone = [...listUsers];
    listUserClone = listUserClone.filter((item) => item.id !== userId);
    setListUser({
      listUsers: listUserClone,
    });
  };
  return (
    <div>
      // <AddUserInfo handleAddNew={handleAddNew} />
      // <br />
      // <br />
      // <DisplayInfo users={listUsers} delete={handleDelete}></DisplayInfo>
    </div>
  );
};

export default MyComponent;

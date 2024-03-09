import React from "react";
import AddUserInfo from "./AddUserInfor";
import DisplayInfo from "./DisplayInfo";

class MyComponent extends React.Component {
  state = {
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
  };
  handleAddNew = (userObj) => {
    console.log(userObj);
  };
  render() {
    return (
      <div>
        <AddUserInfo handleAddNew={this.handleAddNew} />
        <br />
        <br />

        <DisplayInfo users={this.state.listUsers}></DisplayInfo>
      </div>
    );
  }
}

export default MyComponent;

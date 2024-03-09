import React from "react";
import UserInfo from "./AddUserInfor";
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
  render() {
    return (
      <div>
        <UserInfo />
        <br />
        <br />

        <DisplayInfo users={this.state.listUsers}></DisplayInfo>
      </div>
    );
  }
}

export default MyComponent;

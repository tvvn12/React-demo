import React from "react";
import UserInfo from "./UserInfor";
import DisplayInfo from "./DisplayInfo";

class MyComponent extends React.Component {
  render() {
    state = {
      listUsers: [
        {
          id: 1,
          name: "Hoi",
          age: "30",
        },
      ],
    };
    return (
      <div>
        <UserInfo />
        <br />
        <br />

        <DisplayInfo name="Hoi" age="30"></DisplayInfo>
      </div>
    );
  }
}

export default MyComponent;

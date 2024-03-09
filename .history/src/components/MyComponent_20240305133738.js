import React from "react";
import UserInfo from "./UserInfor";
import DisplayInfo from "./DisplayInfo";

class MyComponent extends React.Component {
  render() {
    return (
      <div>
        <UserInfo />
        <br />
        <br />

        <DisplayInfo></DisplayInfo>
      </div>
    );
  }
}

export default MyComponent;

import React from "react";
import UserInfo from "./UserInfor";
import DisplayInfo from "./DisplayInfo";

class MyComponent extends React.Component {
  render() {
    return (
      <div>
        <UserInfo />
        <DisplayInfo></DisplayInfo>
      </div>
    );
  }
}

export default MyComponent;

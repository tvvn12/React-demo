import React from "react";

class DisplayInfo extends React.Component {
  state = {};
  render() {
    const { users } = this.props;

    console.log(this.props);
    return (
      <>
        {users.map((item, index) => {
          return <></>;
        })}
      </>
    );
  }
}

export default DisplayInfo;

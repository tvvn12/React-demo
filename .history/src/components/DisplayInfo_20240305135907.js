import React from "react";

class DisplayInfo extends React.Component {
  state = {};
  render() {
    const { name, age } = this.props;

    console.log(this.props);
    return (
      <div className="">
        <div className="">My name is {name}</div>
        <div className="">My age is {age}</div>
      </div>
    );
  }
}

export default DisplayInfo;

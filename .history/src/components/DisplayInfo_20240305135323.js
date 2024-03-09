import React from "react";

class DisplayInfo extends React.Component {
  state = {};
  render() {
    console.log(this.props);
    return (
      <div className="">
        <div className="">My name is {this.props.name}</div>
        <div className="">My age is {this.props.age}</div>
      </div>
    );
  }
}

export default DisplayInfo;

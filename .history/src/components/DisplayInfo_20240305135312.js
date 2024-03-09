import React from "react";

class DisplayInfo extends React.Component {
  state = {};
  render() {
    console.log(this.props);
    return (
      <div className="">
        <div className="">My name is {this.props.name}</div>
        <div className="">My age is E</div>
      </div>
    );
  }
}

export default DisplayInfo;

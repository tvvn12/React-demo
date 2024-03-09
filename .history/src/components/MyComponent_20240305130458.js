import React from "react";

class MyComponent extends React.Component {
  state = {
    name: "Erics",
    address: "Hoidan It",
    age: 26,
  };
  handleClick(event) {
    console.log(event);
  }
  render() {
    return (
      <div>
        my first component {this.state.name} from {this.state.address}
        <button onClick={this.handleClick}>Click me</button>
      </div>
    );
  }
}

export default MyComponent;

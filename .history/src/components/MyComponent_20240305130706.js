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
  handleMouse(event) {
    console.log(event.pageX);
  }
  render() {
    return (
      <div>
        my first component {this.state.name} from {this.state.address}
        <button onMouseOver={this.handleMouse} onClick={this.handleClick}>
          Click me
        </button>
      </div>
    );
  }
}

export default MyComponent;

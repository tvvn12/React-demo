import React from "react";

class MyComponent extends React.Component {
  state = {
    name: "Erics",
    address: "Hoidan It",
    age: 26,
  };
  // handleClick(event) {
  //   console.log(event);
  // }
  // handleMouse(event) {
  //   console.log(event.pageX);
  // }
  handleOnchange(event) {
    alert("me");
  }
  render() {
    return (
      <div>
        my first component {this.state.name} from {this.state.address}
        {/* <button onMouseOver={this.handleMouse} onClick={this.handleClick}>
          Click me
        </button> */}
        <form action="">
          <input
            onChange={() => this.handleOnchange}
            type="text"
            name=""
            id=""
          />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default MyComponent;

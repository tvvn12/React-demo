import React from "react";

class MyComponent extends React.Component {
  state = {
    name: "Eric",
    address: "Hoidan It",
    age: 26,
  };

  render() {
    return (
      <div>
        my first component {this.state.name} from {this.state.address}
      </div>
    );
  }
}

export default MyComponent;

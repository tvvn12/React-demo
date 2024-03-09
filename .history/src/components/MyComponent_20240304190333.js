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
        my first component
        {Math.random()}
      </div>
    );
  }
}

export default MyComponent;

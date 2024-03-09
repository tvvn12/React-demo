import React from "react";

class UserInfo extends React.Component {
  render() {
    return (
      <div className="">
        my first component {this.state.name} from {this.state.address}
        {/* <button onMouseOver={this.handleMouse} onClick={this.handleClick}>
          Click me
        </button> */}
        <form action="" onSubmit={(e) => this.handleOnSubmit(e)}>
          <input
            value={this.state.name}
            onChange={(event) => this.handleOnchange(event)}
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
export default UserInfo;

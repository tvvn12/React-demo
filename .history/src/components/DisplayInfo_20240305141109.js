import React from "react";

class DisplayInfo extends React.Component {
  state = {};
  render() {
    const { users } = this.props;

    console.log(this.props);
    return (
      <div>
        {users.map((item, index) => {
          return (
            <key={item.id}>
              <div >
                <div className="">name: {item.name}</div>
                <div className="">name: {item.age}</div>
                <br />
              </div>
            </key=>
          );
        })}
      </div>
    );
  }
}

export default DisplayInfo;

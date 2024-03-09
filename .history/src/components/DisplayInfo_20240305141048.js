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
            <>
              <div key={item.id}>
                <div className="">name: {item.name}</div>
                <div className="">name: {item.age}</div>
                <br />
              </div>
            </>
          );
        })}
      </div>
    );
  }
}

export default DisplayInfo;

import React from "react";

class DisplayInfo extends React.Component {
  state = {};
  render() {
    const { users } = this.props;

    console.log(this.props);
    return (
      <>
        {users.map((item, index) => {
          return (
            <>
              <div key={index}>
                <div className="">name: {item.name}</div>
                <div className="">name: {item.age}</div>
                <br />
              </div>
            </>
          );
        })}
      </>
    );
  }
}

export default DisplayInfo;

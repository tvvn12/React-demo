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
              <div>
                <div className="">name: {item.name}</div>
              </div>
            </>
          );
        })}
      </>
    );
  }
}

export default DisplayInfo;

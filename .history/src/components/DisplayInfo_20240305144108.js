import React from "react";

class DisplayInfo extends React.Component {
  state = {};
  handleClick = () => {
    alert("me");
  };
  render() {
    const { users } = this.props;

    console.log(this.props);
    return (
      <div className="">
        <div className="">
          <span
            onClick={() => {
              this.handleClick();
            }}
          >
            Hide
          </span>
        </div>
        {false && (
          <div>
            {users.map((item, index) => {
              return (
                <div key={item.id} className={+item.age > 30 ? "red" : "green"}>
                  <div className="">name: {item.name}</div>
                  <div className="">name: {item.age}</div>
                  <br />
                </div>
              );
            })}
          </div>
        )}
      </div>
    );
  }
}

export default DisplayInfo;

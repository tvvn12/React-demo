import React from "react";
import "./DisplayInfo.scss";
class DisplayInfo extends React.Component {
  state = {
    isShow: true,
  };
  handleClick = () => {
    this.setState({
      isShow: !this.state.isShow,
    });
  };
  componentDidMount() {
    console.log("didmount");
  }
  render() {
    const { users } = this.props;

    console.log(this.props);
    return (
      <div className="display-info">
        <div className="">
          <span
            onClick={() => {
              this.handleClick();
            }}
          >
            {this.state.isShow === true ? "Hide" : "Show"}
          </span>
        </div>
        {this.state.isShow && (
          <div>
            {users.map((item, index) => {
              return (
                <div key={item.id} className={+item.age > 30 ? "red" : "green"}>
                  <div className="">name: {item.name}</div>
                  <div className="">age: {item.age}</div>
                  <button onClick={() => this.props.delete(item.id)}>X</button>
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

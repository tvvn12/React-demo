import React, { useEffect, useState } from "react";
import "./DisplayInfo.scss";

const DisplayInfo = (props) => {
  const { users } = props;
  const [show, setShow] = useState(true);
  const handleShow = () => {
    setShow(!show);
  };
  console.log("render");
  useEffect(() => {
    setTimeout(() => {
      console.log("time");
    }, 3000);
    console.log("effect");
  }, []);
  return (
    <div className="display-info">
      <div className="">
        <span onClick={() => handleShow()}>{show ? "Hide" : "Show"}</span>
      </div>
      {show && (
        <div>
          {users.map((item, index) => {
            return (
              <div key={item.id} className={+item.age > 30 ? "red" : "green"}>
                <div className="">name: {item.name}</div>
                <div className="">age: {item.age}</div>
                <button onClick={() => props.delete(item.id)}>X</button>
                <br />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
export default DisplayInfo;

import React, { useState } from "react";

// class AddUserInfo extends React.Component {
//   state = {
//     name: "Erics",
//     address: "Hoidan It",
//     age: 26,
//   };
//   // handleClick(event) {
//   //   console.log(event);
//   // }
//   // handleMouse(event) {
//   //   console.log(event.pageX);
//   // }
//   handleOnchange(event) {
//     console.log(event, event.target.value);
//     this.setState({
//       name: event.target.value,
//     });
//   }
//   handleOnchange2(event) {
//     console.log(event, event.target.value);
//     this.setState({
//       age: event.target.value,
//     });
//   }
//   handleOnSubmit(e) {
//     e.preventDefault();
//     this.props.handleAddNew({
//       id: Math.floor(Math.random() * 10) + "r",
//       name: this.state.name,
//       age: this.state.age,
//     });
//   }
//   render() {
//     return (
//       <div className="">
//         my first component {this.state.name} from {this.state.age}
//         {/* <button onMouseOver={this.handleMouse} onClick={this.handleClick}>
//           Click me
//         </button> */}
//         <form action="" onSubmit={(e) => this.handleOnSubmit(e)}>
//           <input
//             value={this.state.name}
//             onChange={(event) => this.handleOnchange(event)}
//             type="text"
//             name=""
//             id=""
//           />
//           <input
//             value={this.state.age}
//             onChange={(event) => this.handleOnchange2(event)}
//             type="text"
//             name=""
//             id=""
//           />
//           <button>Submit</button>
//         </form>
//       </div>
//     );
//   }
// }

const AddUserInfor = (props) => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [age, setAge] = useState("");
  const handleOnchange = (event) => {
    setName(event.target.value);
  };
  const handleOnchange2 = (event) => {
    setAge({
      age: event.target.value,
    });
  };
  const handleOnSubmit = (e) => {
    props.handleAddNew({
      id: Math.floor(Math.random() * 10) + "r",
      name: name,
      age: age,
    });
  };
  return (
    <div>
      <div className="">
        my first component {name} from {age}
        {/* <button onMouseOver={this.handleMouse} onClick={this.handleClick}>
          Click me
        </button> */}
        <form action="" onSubmit={(e) => handleOnSubmit(e)}>
          <input
            value={name}
            onChange={(event) => handleOnchange(event)}
            type="text"
            name=""
            id=""
          />
          <input
            value={age}
            onChange={(event) => handleOnchange2(event)}
            type="text"
            name=""
            id=""
          />
          <button>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default AddUserInfor;
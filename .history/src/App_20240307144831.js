import { Link } from "react-router-dom";
import "./App.scss";
import Header from "./components/Header/Header";

const App = () => {
  return (
    <div className="app-container">
      <div className="header-container">
        <Header></Header>
      </div>
      <div className="main-container">
        <div className="sidenav-container"></div>
        <div className="app-conttain"></div>
      </div>
    </div>
  );
};

export default App;

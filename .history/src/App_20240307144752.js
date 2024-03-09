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
      </div>
      <div className="">
        test Link
        <div className="">
          <button>
            <Link to={"/users"}>go to user page</Link>
          </button>
          <button>
            <Link to={"/admins"}>go to admin page</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;

import { Link } from "react-router-dom";
import "./App.scss";
import Header from "./components/Header/Header";

const App = () => {
  return (
    <div className="app-container">
      <Header></Header>
      <div className="">
        test Link
        <div className="">
          <button>
            <Link to={"/users"}>go to user page</Link>
          </button>
          <button>
            <Link to={"/admin"}>go to admin page</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;

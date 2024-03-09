import "./App.scss";
import Header from "./components/Header/Header";

const App = () => {
  return (
    <div className="app-container">
      <Header></Header>
      <div className="">
        test Link
        <div className="">
          <button>go to user page</button>
          <button>go to admin page</button>
        </div>
      </div>
    </div>
  );
};

export default App;

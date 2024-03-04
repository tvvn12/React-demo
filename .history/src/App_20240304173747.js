import { useDispatch, useSelector } from "react-redux";

const App = () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  return <></>;
};

export default App;

import logo from "./logo.svg";
import "./App.css";
import { Provider } from "react-redux";
import { store } from "./Redux/store";
import TodoComp from "./Components/TodoComp";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <TodoComp />
      </Provider>
    </div>
  );
}

export default App;

import "./App.css";
import Backdrop from "./components/Backdrop";
import Modal from "./components/Modal";
import Todo from "./components/Todo";

function App() {
  return (
    <div className="App">
      <h1>My todos</h1>
      <Todo text="Learn react" />
      <Todo text="Learn axios" />
      <Todo text="Learn useEffect" />
    </div>
  );
}

export default App;

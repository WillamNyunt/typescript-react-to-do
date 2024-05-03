import Todos from "./components/Todos";
import "./App.css";
import NewToDo from "./components/NewToDo";
import TodosContextProvider from "./store/TodosContext";

function App() {
  return (
    <TodosContextProvider>
      <h1 style={{ textAlign: "center" }}>Built with TypeScript React 🥵</h1>
      <NewToDo />
      <Todos />
    </TodosContextProvider>
  );
}

export default App;

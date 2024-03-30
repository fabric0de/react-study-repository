import TodoStore from "./TodoStore";
import TodoList from "./TodoList";

function App() {
  const todoStore = new TodoStore();
  return (
    <div className="App">
      <TodoList todoStore={todoStore} />
    </div>
  );
}

export default App;

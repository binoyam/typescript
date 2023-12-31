import React, {  useState } from "react";
import "./App.css";
import InputField from "./components/InputField";
import { Todo } from "./models/models";

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Array<Todo>>([]);
  // const [CompletedTodos, setCompletedTodos] = useState<Array<Todo>>([]);
  // console.log(todo);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (todo) {
      setTodos([...todos, { id: Date.now(), todo: todo, isDone: false }]);
    }
    setTodo("");
  };
// console.log(todos);




  return (
    <div className="App">
      <span className="heading">TAskify</span>
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
      {/* <TodoList /> */}
      {todos.map((todo) => (
        <h1>{todo.todo}</h1>
      ))}
    </div>
  );
};

export default App;

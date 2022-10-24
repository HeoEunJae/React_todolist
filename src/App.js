import React, { useState } from "react";
import "./index.css";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      content: "기상",
      checked: false,
    },
    {
      id: 2,
      content: "밥먹기",
      checked: false,
    },
    {
      id: 3,
      content: "눈축제",
      checked: false,
    },
  ]);
  return (
    <div className="max-w-4xl mx-auto mt-4">
      <TodoInput />
      <TodoList todos={todos} />
    </div>
  );
}

export default App;

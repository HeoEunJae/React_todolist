import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import "./index.css";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState([]);
  const [active, setActive] = useState(false);
  const [selectedTodo, setSelectedTodo] = useState([]);

  useEffect(() => {
    /**APi 호출 코드*/
    const getData = async () => {
      const todos = await axios({
        url: "http://localhost:8083/todos",
        method: "GET",
      });
      // console.log(todos);
      setTodos(todos.data);
    };
    getData();
  }, []);

  const nextId = useRef(4);
  return (
    <div className="max-w-4xl mx-auto mt-4">
      <TodoInput todos={todos} setTodos={setTodos} nextId={nextId} />
      <TodoList
        todos={todos}
        setTodos={setTodos}
        active={active}
        setActive={setActive}
        selectedTodo={selectedTodo}
        setSelectedTodo={setSelectedTodo}
      />
    </div>
  );
}

export default App;

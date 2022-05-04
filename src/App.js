import React, { useState } from "react";
import "./App.css";
import TodoForm from "./TodoForm";
import Todos from "./Todos";
import { uid } from "uid";

function App() {
  const [todos, setTodos] = useState([
    {
      id: uid(),
      text: "Write a new blog post.",
      isCompleted: false,
    },
    {
      id: uid(),
      text: "Pick up laundry.",
      isCompleted: false,
    },
    {
      id: uid(),
      text: "Die.",
      isCompleted: false,
    },
  ]);

  const addTodo = (todo) => {
    setTodos([...todos, { text: todo }]);
    console.log(todo, ...todos);
  };

  const markComplete = (index) => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    setTodos(newTodos);
  };

  const editTitle = (index, title) => {
    const newTodos = [...todos];
    newTodos[index].text = title;
    setTodos(newTodos);
  };

  // const deleteTodo = (index) => {
  //   alert(index);
  //   let list = [...todos];
  //   list.splice(index, 1);
  //   setTodos(list);
  //   console.log(list);
  // };

  return (
    <div className="parent-container">
      <div className="container top-container">
        <div className="app">
          <div className="todoform">
            <TodoForm addTodo={addTodo} />
            <Todos
              todos={todos}
              markComplete={markComplete}
              editTitle={editTitle}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

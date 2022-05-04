import React from "react";

const Todos = ({ todos, markComplete, editTitle, deleteTodo }) => {
  return (
    <div className={"todo-list"}>
      {todos.map((todo, index) => (
        <Todo
          todo={todo}
          key={index}
          index={index}
          markComplete={markComplete}
          editTitle={editTitle}
          deleteTodo={deleteTodo}
        />
      ))}
    </div>
  );
};

const Todo = ({ todo, index, markComplete, editTitle, deleteTodo }) => (
  <div className="todo">
    <p style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}>
      <input
        type={"checkbox"}
        onChange={() => markComplete(index)}
        name={"completed"}
        id={todo.id}
      />{" "}
      {todo.text}
      <button onClick={deleteTodo} id={todo.id}>
        Delete
      </button>
    </p>
  </div>
);

export default Todos;

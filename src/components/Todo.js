import React from "react";

const Todo = (props) => {
  const { todo, toggleComplete, removeTodo } = props;

  const handleCheckBoxClick = () => {
    toggleComplete(todo.id);
  };

  const handleRemove = () => {
    removeTodo(todo.id);
  };

  return (
    <div
      style={{
        display: "flex",
        listStyleType: "none",
        justifyContent: "space-between",
      }}
    >
      <input
        className="todoItem"
        onClick={() => handleCheckBoxClick()}
        type="checkbox"
      />
      <li
        className="todoItem"
        style={{
          color: "white",
          textDecoration: todo.completed ? "line-through" : null,
        }}
      >
        {todo.task}
      </li>
      <button className="todoItem" onClick={() => handleRemove()}>
        Remove
      </button>
    </div>
  );
};

export default Todo;

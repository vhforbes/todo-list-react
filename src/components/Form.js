import React from "react";
import { v4 as uuidv4 } from "uuid";

const Form = (props) => {
  const { addTodo } = props;

  const [todo, setTodo] = React.useState([
    {
      id: "",
      task: "",
      completed: false,
    },
  ]);

  const [inputField, setInputField] = React.useState("");

  const handleTaskInputChange = (e) => {
    setTodo({ ...todo, task: e.target.value });
    setInputField(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todo.task) {
      addTodo({ ...todo, id: uuidv4() });
      setTodo({ ...todo, task: "" });
      setInputField("");
    }
  };

  const input = document.querySelector("#textInput");

  return (
    <form
      onSubmit={(e) => {
        handleSubmit(e);
      }}
    >
      <input
        name="task"
        id="textInput"
        onChange={(e) => handleTaskInputChange(e)}
        value={inputField}
        type="text"
        style={{
          width: "200px",
          height: "30px",
          borderRadius: "10px",
          backgroundColor: "white",
          margin: "20px",
          color: "black",
          border: "none",
          outline: "none",
          paddingLeft: "5px",
          fontSize: "20px",
        }}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;

import "./styles/InputTodo.css";
import { FaPlusCircle } from "react-icons/fa";
import { useState } from "react";

const InputTodo = (props) => {
  const [inputValue, setInputValue] = useState("");
  return (
    <div className="inputContainer">
      <input
        type={"text"}
        value={inputValue}
        className="inputField"
        placeholder="Add todo..."
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
      />
      <FaPlusCircle
        className="addIcon"
        onClick={() => {
          props.onAdd(inputValue);
          setInputValue("");
        }}
      />
    </div>
  );
};

export default InputTodo;

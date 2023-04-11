import InputTodo from "./InputTodo";
import TodosList from "./TodosList";
import "./styles/TodosLogic.css";
import { useState } from "react";

const TodosLogic = () => {
  const [todosList, setTodosList] = useState([]);
  const [renderKey, setRenderKey] = useState(0);
  return (
    <div className="inputAndListContainer">
      <InputTodo
        onAdd={(inputValue) => {
          setTodosList([...todosList, inputValue]);
        }}
      />
      <TodosList
        key={renderKey} // add key property of hooks wont render frontend
        items={todosList}
        onDelete={(index) => {
          todosList.splice(index, 1);
          setTodosList(todosList); // rerenders the frontend
          setRenderKey(Math.random());
        }}
        onEdit={(index) => {
          let editedInput = prompt("Enter new input");
          todosList.splice(index, 1, editedInput);
          setTodosList(todosList);
          setRenderKey(Math.random());
          console.log(todosList);
        }}
      />
    </div>
  );
};

export default TodosLogic;

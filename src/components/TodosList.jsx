import TodoItem from "./TodoItem";
import "./styles/TodosList.css";
import { useState } from "react";

const TodosList = (props) => {
  return (
    <div className="listContainer">
      {props.items.map((inputItem, index) => (
        <TodoItem
          item={inputItem}
          onPress={(item, y) => {
            alert(`${item} ${y}`);
          }}
          onDelete={() => props.onDelete(index)}
          onEdit={() => props.onEdit(index)}
        />
      ))}
      {/* <TodoItem
        item="first item"
        onPress={(item, y) => {
          alert(`${item} ${y}`);
        }}
        onDelete={() => props.onDelete()}
      /> */}
    </div>
  );
};

export default TodosList;

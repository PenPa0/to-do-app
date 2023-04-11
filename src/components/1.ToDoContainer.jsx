import "./styles/ToDoContainer.css";
import ToDoTitle from "./ToDoTitle";
import AddEditDeleteItems from "./AddEditDeleteItems";

// This was the 1st iteration of the app, kindly ignore this
const ToDoContainer = () => {
  return (
    <div class="motherContainer">
      <div class="container">
        <ToDoTitle />
        <AddEditDeleteItems />
      </div>
    </div>
  );
};

export default ToDoContainer;

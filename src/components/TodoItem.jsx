import "./styles/TodoItem.css";
import { FaTrash } from "react-icons/fa";
import { AiFillEdit } from "react-icons/ai";

const TodoItem = (props) => {
  return (
    <div className="display">
      <div className="boxes">
        <div>
          <input
            type={"checkbox"}
            onClick={() => {
              props.onPress(props.item, "Test Check!");
            }}
          />
          {props.item}
        </div>
        <div className="icons">
          <AiFillEdit onClick={() => props.onEdit()} />
          <FaTrash onClick={() => props.onDelete()} />
        </div>
      </div>
    </div>
  );
};

export default TodoItem;

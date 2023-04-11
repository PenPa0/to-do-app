import "./styles/AddEditDeleteItems.css";
import { FaPlusCircle } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";
import { AiFillEdit } from "react-icons/ai";
// import {MdCheckBoxOutlineBlank} from 'react-icons/md';
// This was the 1st iteration of the app, kindly ignore this

const AddEditDeleteItems = () => {
  return (
    <div>
      <div>
        {" "}
        <input type="text" class="add" placeholder="Add todo..." />
        <FaPlusCircle class="icon" />
      </div>
      <div class="display">
        <div className="boxes">
          <input type="checkbox" />
          first item
          <div className="icons">
            <AiFillEdit />
            <FaTrash />
          </div>
        </div>
        <div className="boxes">
          <input type="checkbox" />
          second item
          <div className="icons">
            <AiFillEdit />
            <FaTrash />
          </div>
        </div>
        <div className="boxes">
          <input type="checkbox" />
          third item
          <div className="icons">
            <AiFillEdit />
            <FaTrash />
          </div>
        </div>
        <div className="boxes">
          <input type="checkbox" />
          another item
          <div className="icons">
            <AiFillEdit />
            <FaTrash />
          </div>
        </div>
        {/* <div><MdCheckBoxOutlineBlank class="checkbox"/> first item<AiFillEdit class="editIcon"/><FaTrash class="deleteIcon"/></div>
            <div><MdCheckBoxOutlineBlank class="checkbox"/> second item<AiFillEdit class="editIcon"/><FaTrash class="deleteIcon"/></div>
            <div><MdCheckBoxOutlineBlank class="checkbox"/> third item<AiFillEdit class="editIcon"/><FaTrash class="deleteIcon"/></div>
            <div><MdCheckBoxOutlineBlank class="checkbox"/> another item<AiFillEdit class="editIcon"/><FaTrash class="deleteIcon"/></div> */}
      </div>
    </div>
  );
};

export default AddEditDeleteItems;

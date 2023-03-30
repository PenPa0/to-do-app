import './styles/AddEditDeleteItems.css';
import {FaPlusCircle} from 'react-icons/fa';
import {FaTrash} from 'react-icons/fa';
import {AiFillEdit} from 'react-icons/ai';
// import {MdCheckBoxOutlineBlank} from 'react-icons/md';


const AddEditDeleteItems = () => {
  return (
    <div>
        <div> <input type="text" class="add" placeholder='Add todo...'/><FaPlusCircle class="icon"/></div>
        <div class="display">
            <div><input type="checkbox"/>first item<AiFillEdit/><FaTrash/></div>
            <div><input type="checkbox"/>second item<AiFillEdit/><FaTrash/></div>
            <div><input type="checkbox"/>third item<AiFillEdit/><FaTrash/></div>
            <div><input type="checkbox"/>another item<AiFillEdit/><FaTrash/></div>
            {/* <div><MdCheckBoxOutlineBlank class="checkbox"/> first item<AiFillEdit class="editIcon"/><FaTrash class="deleteIcon"/></div>
            <div><MdCheckBoxOutlineBlank class="checkbox"/> second item<AiFillEdit class="editIcon"/><FaTrash class="deleteIcon"/></div>
            <div><MdCheckBoxOutlineBlank class="checkbox"/> third item<AiFillEdit class="editIcon"/><FaTrash class="deleteIcon"/></div>
            <div><MdCheckBoxOutlineBlank class="checkbox"/> another item<AiFillEdit class="editIcon"/><FaTrash class="deleteIcon"/></div> */}
        </div>
    </div>
  )
}

export default AddEditDeleteItems
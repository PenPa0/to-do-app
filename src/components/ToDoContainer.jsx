import './styles/ToDoContainer.css'
import ToDoTitle from './ToDoTitle'
import AddEditDeleteItems from './AddEditDeleteItems' 


const ToDoContainer = () => {
    return (
        <div class="motherContainer">
            <div class="container">
            <ToDoTitle/>
            <AddEditDeleteItems/>
            </div>
        </div>
    )
}

export default ToDoContainer
import Header from "./Header"
import TodosLogic from "./TodosLogic"
import "./styles/TodoApp.css"

const TodoApp = () => {
  return (
    <div className="borderContainer">
        <div className="parentContainer">
            <Header/>
            <TodosLogic/>
        </div>
    </div>
  )
}

export default TodoApp
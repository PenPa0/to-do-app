import "./App.css";
// import Greeter from './components/Greeter';
// import CustomButton from './components/CustomButton';
// import ToDoContainer from './components/ToDoContainer';
import TodoApp from "./components/TodoApp";

function App() {
  return (
    <div className="App">
      {/* <Greeter person="John"/>
      <Greeter person="Steve"/>
<CustomButton onClick={() => alert('Clicked!')} />
*/}
      {/* <ToDoContainer/> */}
      <TodoApp />
    </div>
  );
}

export default App;

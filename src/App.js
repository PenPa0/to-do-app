// import logo from './logo.svg';
import './App.css';
// import AAB from './components/AAB';
// import Greeter from './components/Greeter';
// import CustomButton from './components/CustomButton';
import ToDoContainer from './components/ToDoContainer';

function App() {
  return (
    <div className="App">
      {/* <Greeter person="John"/>
      <Greeter person="Steve"/>
      <Greeter person="Juan"/>
<CustomButton onClick={() => alert('Clicked!')} />
      <AAB/> */}
      <ToDoContainer/>
    </div>
  );
}

export default App;

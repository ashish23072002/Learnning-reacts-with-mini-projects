import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'; 
// import { ReactUseEffect } from "./components/hooks/useEffects/";
// import { EventHandling } from "./components/eventHandling";
// import { EventProps } from './components/eventProps';
// import { State } from './components/hooks/useState/index';
// import { DerivedState } from './components/hooks/useState/derivedState';
// import { ToggleSwitch } from './components/MiniProject/ToggleSwitch/ToggleSwitch';
// import { ToggleSwitchPractice } from './components/MiniProject/ToggleSwitch/index';
// import { TodoProject } from './components/MiniProject/Todo/Todo';
// import CounterChallenge from './components/hooks/useState/Challange';
import { RegistrationForm } from './components/hooks/useState/Registration';

function App() {
  return (
    <div className="App">
    {/* <EventHandling/> */}
    {/* <ReactUseEffect/> */}
    {/* <EventProps/> */}
    {/* <State/>
    <DerivedState/> */}
    {/* <ToggleSwitch/> */}
    {/* <ToggleSwitchPractice/> */}
    {/* <TodoProject/> */}
    {/* <CounterChallenge/> */}
    <RegistrationForm/>
    </div>
    
  );
}

export default App;

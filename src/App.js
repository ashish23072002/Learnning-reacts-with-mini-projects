import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'; 
// import { ReactUseEffect } from "./components/useEffects";
// import { EventHandling } from "./components/eventHandling";
// import { EventProps } from './components/eventProps';
// import { State } from './components/hooks/useState/index';
// import { DerivedState } from './components/hooks/useState/derivedState';
import { ToggleSwitch } from './components/MiniProject/ToggleSwitch/ToggleSwitch';

function App() {
  return (
    <div className="App">
    {/* <EventHandling/> */}
    {/* <ReactUseEffect/> */}
    {/* <EventProps/> */}
    {/* <State/>
    <DerivedState/> */}
    <ToggleSwitch/>
    </div>
    
  );
}

export default App;

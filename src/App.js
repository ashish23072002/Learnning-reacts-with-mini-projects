import './App.css'; 
import { ReactUseEffect } from "./components/useEffects";
import { EventHandling } from "./components/eventHandling";
import { EventProps } from './components/eventProps';

function App() {
  return (
    <div className="App">
    {/* <EventHandling/> */}
    {/* <ReactUseEffect/> */}
    <EventProps/>
    </div>
    
  );
}

export default App;

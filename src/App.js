import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BioProvider } from "./components/hooks/ContexAPICustomeHook";
// import { ReducerComp } from "./components/hooks/UseReducer";
import { TheamProvider } from "./components/hooks/ContexAPICustomeHook/DarkLite";
import { ReactMemo } from "./components/hooks/Memo/ReactMemo";
import MemoParentComponent from "./components/hooks/Memo/UseMemo";
import { UseCallback } from "./components/hooks/Memo/UseCallback";
import { PracticesessionII } from "./components/PracticeSession/PracticeFormRef";
// import { Home } from './components/hooks/ContexAPICustomeHook/Home';
// import { About } from './components/hooks/ContexAPICustomeHook/About';
// import { Pracform } from './components/PracticeForm';
// import { PracticesessionII } from './components/PracticeFormII';
// import { ExpenseSplitter } from './components/ExpenseSplitter';
// import { UseRef } from './components/hooks/useRef';
// import { ForwardRef } from './components/hooks/useRef/ForwardRef';
// import { UseID } from './components/hooks/UseId';
// import { ReactUseEffect } from "./components/hooks/useEffects/";
// import { EventHandling } from "./components/eventHandling";
// import { EventProps } from './components/eventProps';
// import { State } from './components/hooks/useState/index';
// import { DerivedState } from './components/hooks/useState/derivedState';
// import { ToggleSwitch } from './components/MiniProject/ToggleSwitch/ToggleSwitch';
// import { ToggleSwitchPractice } from './components/MiniProject/ToggleSwitch/index';
// import { TodoProject } from './components/MiniProject/Todo/Todo';
// import CounterChallenge from './components/hooks/useState/Challange';
// import { RegistrationForm } from './components/hooks/useState/Registration';
// import { RegistrationFormReact } from './components/hooks/useState/RegistrationReact';
// import { EffectChallenge } from './components/hooks/useEffects/EffeectChallange';
// import { CleanUp } from './components/hooks/useEffects/CleanUp';
// import { NotToFeatch } from './components/hooks/useEffects/HowNotToFeatchApi';
// import { FeatchApi } from './components/hooks/useEffects/FeatchApi';

function App() {
  return (
    <BioProvider>
      <TheamProvider>
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
          {/* <RegistrationForm/> */}
          {/* <RegistrationFormReact/> */}
          {/* <EffectChallenge/> */}
          {/* <CleanUp/> */}
          {/* <NotToFeatch/> */}
          {/* <FeatchApi/> */}
          {/* <Pracform/> */}
          {/* <PracticesessionII/> */}
          {/* <ExpenseSplitter/> */}
          {/* <UseRef/> */}
          {/* <ForwardRef/> */}
          {/* <UseID/> */}
          {/* <Home/>
    <About/> */}
          {/* <ReducerComp /> */}
        {/* <ReactMemo/> */}
        {/* <MemoParentComponent/> */}
        <UseCallback/>
        <PracticesessionII/>
        </div>
        {/* <DarkLight/> */}
      </TheamProvider>
    </BioProvider>
  );
}

export default App;

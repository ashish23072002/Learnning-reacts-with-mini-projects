import { useState } from "react";
import  {Counts}  from "./MemoCount";

export const ReactMemo = () => {
  // Declare a state variable 'count' and its setter 'setCount', initialized to 0
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h1>Simple Counter</h1>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>

      <Counts />
    </div>
  );
};

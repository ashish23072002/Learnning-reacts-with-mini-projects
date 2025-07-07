import { memo, useCallback, useState } from "react";
import { Counts } from "./MemoCount";

const Button = memo(({ onClick, children }) => {
  console.log(`Rendering button: ${children}`);

  return (
    <button
      className={`text-black mb-4 py-2 px-5 ${
        children === "Increment" ? "bg-secondary" : "bg-danger"
      }`}
      onClick={onClick}
    >
      {children}
    </button>
  );
});

export const UseCallback = () => {
  // Declare a state variable 'count' and its setter 'setCount', initialized to 0
  const [count, setCount] = useState(0);

  //   const incre = () => {
  //     console.log("increment inside")
  //     setCount((prevCount) => prevCount + 1);
  //   };

  //   const decre = () => {
  //     setCount((prevCount) => prevCount - 1);
  //   };

  const incre = useCallback(() => {
    console.log("increment inside");
    setCount((prevCount) => prevCount + 1);
  }, []);

  const decre = useCallback(() => {
    console.log("decrement inside");
    setCount((prevCount) => prevCount - 1);
  }, []);

  return (
    <div className="App">
      <h1>Simple Counter</h1>
      <p>Count: {count}</p>
      <Button onClick={incre}>Increment</Button>
      <Button onClick={decre}>Decreement</Button>

      <Counts />
    </div>
  );
};

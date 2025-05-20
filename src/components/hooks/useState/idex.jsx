import { useState } from "react";

export const State = () => {
  const [count, setCount] = useState(0);
  const handelButtonClick = () => {
    setCount(() => count + 1);
    console.log(count);
  };

  return (
    <>
      <div className="container mt-5">
        <h1 className="text-center">{count}</h1>
        <button onClick={handelButtonClick}>Increment</button>
      </div>
    </>
  );
};

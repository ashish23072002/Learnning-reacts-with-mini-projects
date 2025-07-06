import { useMemo, useState } from "react";

// eslint-disable-next-line react/display-name
const ExpensiveComponent = () => {
  //   Expensive calculation function
  const sum = () => {
    console.log("Calculating sum...");
    let i = 0;
    for (i = 0; i <= 1000000000; i++) {
      i = i + 1;
    }
    return i;
  };

  const total = useMemo(() => sum(), []); //   The useMemo hook in React is utilized to optimize performance by memoizing (caching) the result of an expensive calculation. This prevents unnecessary re-computation of values on every render, especially when the inputs to the calculation have not changed.

  //   const total = sum();     
  return <p> sum: {total} </p>;
};

const MemoParentComponent = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="p-4 min-vh-100 d-flex flex-column justify-content-center align-items-center bg-dark text-white">
      <ExpensiveComponent />
      <button
        onClick={() => setCount(count + 1)}
        className="py-3 px-4 bg-info rounded"
      >
        Re-render Parent
      </button>
      <p>Parent re-renders: {count}</p>
    </div>
  );
};

export default MemoParentComponent;

//* useState Challenge Description:
//? Create a simple React component that allows users to increment and decrement a counter using two buttons.

//? Reset Button: Add a button to reset the count to zero.

//? Limitations: Set a maximum and minimum limit for the counter and disable the buttons when those limits are reached.

//? Step Increment: Add an input field to allow users to set the step value by which the counter should increment or decrement.

import { useState } from "react";

const CounterChallenge = () => {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(0);

  const handleIncrement = () => {
    setCount(count + step);
  };

  const handleDecrement = () => {
    setCount(count - step);
  };

  const handleReset = () => {
    setCount(0);
  };

  return (
    <div className="container mt-5">
      <h1 className="mb-4">useState Challenge</h1>

      <p className="fs-4">
        Count: <span className="fw-bold"> {count} </span>
      </p>

      <div className="mb-3">
        <label className="form-label">
          Step:
          <input
            type="number"
            className="form-control mt-1"
            // value={step}
            onChange={(e) => setStep(Number(e.target.value))}
          />
        </label>
      </div>

      <div className="d-flex gap-3">
        <button
          className="btn btn-success"
          onClick={handleIncrement}
          disabled={count >= 100}
        >
          Increment
        </button>
        <button
          className="btn btn-warning"
          onClick={handleDecrement}
          disabled={count <= 0}
        >
          Decrement
        </button>
        <button className="btn btn-danger" onClick={handleReset}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default CounterChallenge;

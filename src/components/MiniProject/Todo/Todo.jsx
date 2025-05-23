import { useState } from "react";
import "./Todo.css";

export const TodoProject = () => {
  const [inputValue, setInputValue] = useState("");
  const [task, setTask] = useState([]);

  const handleInputChange = (value) => {
    setInputValue(value);
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!inputValue) return; // not store the emply value from the input
    if (task.includes(inputValue)) {
      setInputValue("");
      return;
    } // condetion to chek weater the value existed on the array

    setTask((prev) => [...prev, inputValue]); //Spread Operator
    setInputValue("");
  };
  return (
    <>
      <section className="todo-container">
        <header>
          <h1>To-Do list</h1>
        </header>
        <section className="form">
          <form onSubmit={handleFormSubmit}>
            <div>
              <input
                type="text"
                className="todo-input"
                autoComplete="off"
                value={inputValue}
                onChange={(event) => handleInputChange(event.target.value)}
              ></input>
            </div>
            <div>
              <button type="submit" className="todo-btn">
                Add Task
              </button>
            </div>
          </form>
        </section>
        <section>
            <ul>
                task.map((curTask, index)=>{
                    return<li key={index}></li>
                })
            </ul>
        </section>
      </section>
    </>
  );
};

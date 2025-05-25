import {useState } from "react";
import "./Todo.css";
import { TodoForm } from "./TodoForm";
import { TodoList } from "./TodoList";
import { ToDoDate } from "./ToDoDate";

export const TodoProject = () => {
  const [task, setTask] = useState([]);

  const handleFormSubmit = (inputValue) => {
    if (!inputValue) return; // not store the emply value from the input
    if (task.includes(inputValue)) {
      return;
    } // condetion to chek weater the value existed on the array

    setTask((prev) => [...prev, inputValue]); //Spread Operator(...)
  };

  const handleDeleteTodo = (value) => {
    setTask((prevTasks) => prevTasks.filter((curTask) => curTask !== value));
    // console.log(value);
  };

  const clearAllTo = () => {
    setTask([]);
  };
  return (
    <>
      <section className="todo-container">
        <header>
          <h1>To-Do list</h1>
        </header>
        <section>
          <ToDoDate />
        </section>
        <TodoForm onAddTodo={handleFormSubmit} />
        <section>
          <ul>
            {task.map((curTask, index) => {
              return (
                <TodoList
                  key={index}
                  data={curTask}
                  onHandleTodo={handleDeleteTodo}
                />
              );
            })}
          </ul>
        </section>
        <section>
          <button onClick={clearAllTo} className="clear-btn">
            Clear all
          </button>
        </section>
      </section>
    </>
  );
};

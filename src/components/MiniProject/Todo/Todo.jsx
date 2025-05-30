import { useEffect, useState } from "react";
import "./Todo.css";
import { TodoForm } from "./TodoForm";
import { TodoList } from "./TodoList";
import { ToDoDate } from "./ToDoDate";
import { getLocalStorageData,setLocalStorageData } from "./TodoLocalStorage";


export const TodoProject = () => {
  const [task, setTask] = useState(() => getLocalStorageData());

  const handleFormSubmit = (inputValue) => {
    const { id, content, checked } = inputValue;
    if (!content) return; // to chek input filed is empty or not
    // if (task.includes(inputValue)) return; // condetion to chek weater the value existed on the array

    const ifToDoMatched = task.find((curTask) => curTask.content === content);
    if (ifToDoMatched) return;

    setTask((prev) => [...prev, { id, content, checked }]); //Spread Operator(...)
  };

  const handleCheckedTodo = (content) => {
    const updateTask = task.map((curTask) => {
      if (curTask.content === content) {
        return { ...curTask, checked: !curTask.checked };
      } else {
        return curTask;
      }
    });
    setTask(updateTask);
  };
  useEffect(() => {
    console.log(task);
  }, [task]);
  const handleDeleteTodo = (value) => {
    setTask((prevTasks) =>
      prevTasks.filter((curTask) => curTask.content !== value)
    );
    // console.log(value);
  };

  const clearAllTo = () => {
    setTask([]);
  };

  useEffect(() => {
  setLocalStorageData(task);
}, [task]);

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
            {task.map((curTask) => {
              return (
                <TodoList
                  key={curTask.id}
                  data={curTask.content}
                  checked={curTask.checked}
                  onHandleTodo={handleDeleteTodo}
                  onHandleCheckedTodo={handleCheckedTodo}
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

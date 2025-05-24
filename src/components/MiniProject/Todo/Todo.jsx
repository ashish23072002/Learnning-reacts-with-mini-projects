import { useEffect, useState } from "react";
import "./Todo.css";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { IoCheckmarkCircle } from "react-icons/io5";

export const TodoProject = () => {
  const [inputValue, setInputValue] = useState("");
  const [task, setTask] = useState([]);
  const [dateTime, setDateTime] = useState();


  useEffect(()=>{
    const intearval =setInterval(()=>{
      const now= new Date();
      const formattedDate=now.toLocaleDateString();
      const formattedTime=now.toLocaleTimeString()
  
      setDateTime(`${formattedDate} - ${formattedTime}`);
  
    },1000)
    return () =>  clearInterval(intearval)
  },[])

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

    setTask((prev) => [...prev, inputValue]); //Spread Operator(...)
    setInputValue("");
  };


  const handleDeleteTodo= (value)=>{
    setTask((prevTasks) => prevTasks.filter((curTask) => curTask !== value));
    // console.log(value);
  }

  const clearAllTo =()=>{
    setTask([]);
  }
  return (
    <>
      <section className="todo-container">
        <header>
          <h1>To-Do list</h1>
        </header>
        <section className="date-time">
          {dateTime}
        </section>
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
                {task.map((curTask,index)=>{
                  return <li key={index} className="todo-item">
                    <span>{curTask}</span>
                    <button className="check-btn"><IoCheckmarkCircle/></button>
                    <button className="delete-btn" onClick={()=>handleDeleteTodo(curTask)}>
                      <RiDeleteBin5Fill/></button>
                  </li>
                })
                }
            </ul>
        </section>
        <section>
          <button onClick={clearAllTo} className="clear-btn">Clear all</button>
        </section>
      </section>
    </>
  );
};

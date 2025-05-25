import { IoCheckmarkCircle } from "react-icons/io5";
import { RiDeleteBin5Fill } from "react-icons/ri";

export const TodoList = ({key,data,onHandleTodo}) => {
  return (
    <>
      <li key={key} className="todo-item">
        <span>{data}</span>
        <button className="check-btn">
          <IoCheckmarkCircle />
        </button>
        <button
          className="delete-btn"
          onClick={() => onHandleTodo(data)}
        >
          <RiDeleteBin5Fill />
        </button>
      </li>
    </>
  );
};

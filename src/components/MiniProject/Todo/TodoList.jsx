import { IoCheckmarkCircle } from "react-icons/io5";
import { RiDeleteBin5Fill } from "react-icons/ri";

export const TodoList = ({data,onHandleTodo}) => {
  return (
    <>
      <li className="todo-item">
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

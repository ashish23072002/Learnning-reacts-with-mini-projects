import { IoCheckmarkCircle } from "react-icons/io5";
import { RiDeleteBin5Fill } from "react-icons/ri";

export const TodoList = ({
  data,
  onHandleTodo,
  onHandleCheckedTodo,
  checked,
}) => {
  return (
    <>
      <li className="todo-item">
        <span className={checked ? "checkList": "notCheckList"}>{data}</span>
        <button className="check-btn" onClick={()=>onHandleCheckedTodo(data)}>
          <IoCheckmarkCircle />
        </button>
        <button className="delete-btn" onClick={() => onHandleTodo(data)}>
          <RiDeleteBin5Fill />
        </button>
      </li>
    </>
  );
};

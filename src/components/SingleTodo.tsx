import { useContext, ReactNode } from "react";
//icons
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { MdDone } from "react-icons/md";
//context
import { TaskifyContext } from "../context/TaskifyContext";
//utilities
import { TodoObject } from "../utilities/TodoObject";

const SingleTodo: React.FC<TodoObject> = ({ id, todo, isDone }) => {
  const { setTodos } = useContext(TaskifyContext);
  return (
    <form className="flex h-[50px] justify-between overflow-hidden rounded-[5px] bg-blue-900 p-[5px]">
      <span className="flex items-center border-0 py-[5px] pl-[10px] text-[20px] capitalize text-gray-200">
        {todo as ReactNode}
      </span>
      <div className="flex items-center justify-evenly gap-2">
        <span
          id="editIcon"
          className="flex cursor-pointer items-center rounded-sm bg-gray-200 p-[5px] text-[20px] text-gray-800"
        >
          <AiFillEdit />
        </span>
        <span
          id="deleteIcon"
          className="flex cursor-pointer items-center rounded-sm bg-gray-200 p-[5px] text-[20px] text-gray-800"
        >
          <AiFillDelete />
        </span>
        <span
          id="doneIcon"
          className="flex cursor-pointer items-center rounded-sm bg-gray-200 p-[5px] text-[20px] text-gray-800"
        >
          <MdDone />
        </span>
      </div>
    </form>
  );
};

export default SingleTodo;

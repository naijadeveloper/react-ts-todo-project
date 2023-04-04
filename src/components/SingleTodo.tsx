import { useState, useContext, ReactNode, FormEvent } from "react";
//icons
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { MdDone } from "react-icons/md";
//context
import { TaskifyContext } from "../context/TaskifyContext";
//utilities
import { TodoObject } from "../utilities/TodoObject";

const SingleTodo: React.FC<TodoObject> = ({ id, todo, isDone }) => {
  const { todos, setTodos } = useContext(TaskifyContext);
  const [gray, setGray] = useState<boolean>(isDone);
  const [edit, setEdit] = useState<boolean>(false);
  const [editText, setEditText] = useState<string>(todo);

  function handleEdit() {
    setEditText(todo);
    if (!edit && !isDone) {
      setEdit(true);
    } else if (edit == true && !isDone) {
      setEdit(false);
    }
  }

  function handleSubmitNewTodoText(e: FormEvent) {
    e.preventDefault();
    setTodos([
      ...todos.map((eachTodo) => {
        if (eachTodo.id == id) {
          eachTodo.todo = editText;
        }
        return eachTodo;
      }),
    ]);
    setEdit(false);
  }

  function handleDelete() {
    setEdit(false);
    setTodos([...todos.filter((eachTodo) => eachTodo.id !== id)]);
  }

  function handleDone() {
    setEdit(false);
    setTodos([
      ...todos.map((eachTodo) => {
        eachTodo.id == id &&
          (() => {
            eachTodo.isDone = !isDone;
            setGray(!gray);
          })();
        return eachTodo;
      }),
    ]);
  }

  return (
    <form
      onSubmit={handleSubmitNewTodoText}
      className={`flex items-start justify-between self-start overflow-hidden rounded-[5px] ${
        gray ? "border border-blue-900 bg-blue-600" : "bg-blue-900"
      } p-[5px] transition-all duration-200 ease-out`}
    >
      {edit ? (
        <input
          className="mr-[10px] flex-1 rounded-[3px] border-2 border-blue-600 bg-blue-700 px-1 text-lg text-gray-200 outline-none"
          type="text"
          value={editText}
          onChange={(e) => setEditText(e.target.value)}
          autoFocus
        />
      ) : (
        <span
          className={`mr-auto flex items-center pl-[10px] text-[20px] capitalize text-gray-200 ${
            gray && "line-through decoration-black decoration-4"
          }`}
        >
          {todo as ReactNode}
        </span>
      )}

      <div className="flex items-center justify-evenly gap-2">
        <span
          onClick={handleEdit}
          className="flex cursor-pointer items-center rounded-[3px] border border-blue-900 bg-gray-200 p-[5px] text-[20px] text-gray-800"
        >
          <AiFillEdit />
        </span>
        <span
          onClick={handleDelete}
          className="flex cursor-pointer items-center rounded-[3px] border border-blue-900 bg-gray-200 p-[5px] text-[20px] text-red-600"
        >
          <AiFillDelete />
        </span>
        <span
          onClick={handleDone}
          className="flex cursor-pointer items-center rounded-[3px] border border-blue-900 bg-gray-200 p-[5px] text-[20px] text-gray-800"
        >
          <MdDone />
        </span>
      </div>
    </form>
  );
};

export default SingleTodo;

import { useContext } from "react";
import { TaskifyContext } from "../context/TaskifyContext";

//component imports
import SingleTodo from "./SingleTodo";

const TodoList = () => {
  const { todos } = useContext(TaskifyContext);
  return (
    <div className="mt-[20px] grid w-[90%] grid-cols-[repeat(auto-fit,_minmax(300px,_1fr))] gap-[10px]">
      {todos.map((todo) => (
        <SingleTodo key={todo.id} {...todo} />
      ))}
    </div>
  );
};

export default TodoList;

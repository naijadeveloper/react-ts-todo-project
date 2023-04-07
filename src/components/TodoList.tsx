import { useContext } from "react";
import { TaskifyContext } from "../context/TaskifyContext";
import { TodoObject } from "../utilities/TodoObject";

//component imports
import SingleTodo from "./SingleTodo";

const TodoList = () => {
  const { todos } = useContext(TaskifyContext);
  // console.table(todos);
  return (
    <div className="mt-[20px] grid w-full grid-cols-[repeat(auto-fit,_minmax(300px,_1fr))] gap-[10px] px-2 md:w-[90%]">
      {todos &&
        (todos as TodoObject[]).map((todo: TodoObject) => (
          <SingleTodo key={todo.id} {...todo} />
        ))}
    </div>
  );
};

export default TodoList;

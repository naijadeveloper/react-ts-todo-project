import { createContext, ReactNode } from "react";
import { TodoObject } from "../utilities/TodoObject";
import useLocalStorage from "../hooks/useLocalStorage";
import TodoReducer, {
  todoReducerType,
  actionType,
} from "../utilities/TodoReducer";

type contextType = {
  todos: TodoObject[];
  todoDispatch: React.Dispatch<actionType>;
};

export const TaskifyContext = createContext({} as contextType);

export const TaskifyContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [todos, todoDispatch] = useLocalStorage<todoReducerType, TodoObject[]>(
    "todoStorage",
    [],
    TodoReducer
  );
  return (
    <TaskifyContext.Provider value={{ todos, todoDispatch }}>
      {children}
    </TaskifyContext.Provider>
  );
};

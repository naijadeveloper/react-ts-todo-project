import { createContext, ReactNode, useState } from "react";
import { TodoObject } from "../utilities/TodoObject";

type contextType = {
  todos: TodoObject[];
  setTodos: React.Dispatch<React.SetStateAction<TodoObject[]>>;
};

export const TaskifyContext = createContext({} as contextType);

export const TaskifyContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [todos, setTodos] = useState<TodoObject[]>([]);
  return (
    <TaskifyContext.Provider value={{ todos, setTodos }}>
      {children}
    </TaskifyContext.Provider>
  );
};

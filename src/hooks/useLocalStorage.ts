import { useEffect, useReducer } from "react";
//
import { TodoObject } from "../utilities/TodoObject";
import TodoReducer, { todoReducerType } from "../utilities/TodoReducer";



export default function useLocalStorage(key: string, initialValue: TodoObject[] | (() => TodoObject[])) {

  const [todos, todoDispatch] = useReducer<todoReducerType, TodoObject[]>(TodoReducer, [], (): TodoObject[] => {
    let todos = localStorage.getItem(key);
    if(todos) return JSON.parse(todos);
    
    if(typeof initialValue == "function") {
      return (initialValue as () => TodoObject[])();
    }

    return initialValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(todos))
  }, [todos, key])

  return [todos, todoDispatch];
}
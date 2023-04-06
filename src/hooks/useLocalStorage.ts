import { useEffect, useReducer } from "react";
//
import { todoReducerType } from "../utilities/TodoReducer";



export default function useLocalStorage<F extends todoReducerType, T>(key: string, initialValue: T | (() => T), reducerFunction?: F) {

  const [todos, todoDispatch] = useReducer<F, T>((reducerFunction as F), ([] as T), () => {
    let todos = localStorage.getItem(key);
    if(todos) return JSON.parse(todos);
    
    if(typeof initialValue == "function") {
      return (initialValue as () => T)();
    }

    return initialValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(todos));
  }, [todos, key])

  return [todos, todoDispatch] as [typeof todos, typeof todoDispatch];
}
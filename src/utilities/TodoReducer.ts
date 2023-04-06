import { TodoObject } from "../utilities/TodoObject";

export interface actionType {
  type: "add" | "update" | "delete";
  payload1?: TodoObject;
  payload2?: {id: number, newText?: string, isDone?: boolean}
}

export type todoReducerType = (todos: TodoObject[], action: actionType) => TodoObject[];

const TodoReducer: todoReducerType = (todos: TodoObject[], action: actionType): TodoObject[] => {
  switch(action.type) {
    case "add":
      return [
        ...todos,
        action.payload1 as TodoObject,
      ];
    case "update":
      if(!action.payload2?.newText) {
        return [
          ...todos.map((eachTodo) => {
            eachTodo.id == action.payload2?.id &&
              (() => {
                eachTodo.isDone = action.payload2?.isDone as boolean;
              })();
            return eachTodo;
          }),
        ];
      }
      // else
      return [
      ...todos.map((eachTodo) => {
        if (eachTodo.id == action.payload2?.id) {
          eachTodo.todo = action.payload2?.newText as string;
        }
        return eachTodo;
      }),
    ];
    case "delete":
      return [...todos.filter((eachTodo) => eachTodo.id !== action.payload2?.id)];
    default:
      return todos
  }
}

export default TodoReducer;
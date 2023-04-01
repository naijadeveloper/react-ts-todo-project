export interface TodoObject {
  id: number;
  todo: string | (() => string);
  isDone: boolean;
}
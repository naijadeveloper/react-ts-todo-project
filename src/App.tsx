import React, { useState } from "react";
//components imports
import InputField from "./components/InputField";
import TodoList from "./components/TodoList";

const App: React.FC = () => {
  const [todo, setTodo] = useState<string | (() => string)>("");

  return (
    <div className="App flex h-screen w-screen flex-col items-center overflow-auto bg-blue-500 pb-10">
      <span className="z-[1] mx-0 my-4 text-center font-neu text-6xl uppercase text-gray-200 md:my-[30px]">
        Taskify
      </span>
      <InputField todo={todo} setTodo={setTodo} />
      <TodoList />
    </div>
  );
};

export default App;

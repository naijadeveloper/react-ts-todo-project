import React, { useState } from "react";
import { TaskifyContextProvider } from "./context/TaskifyContext";
//components
import InputField from "./components/InputField";

const App: React.FC = () => {
  const [todo, setTodo] = useState<string | (() => string)>("");
  return (
    <TaskifyContextProvider>
      <div className="flex h-screen w-screen flex-col items-center bg-blue-500">
        <span className="z-[1] mx-0 my-4 text-center font-neu text-5xl uppercase text-white md:my-[30px]">
          Taskify
        </span>
        <InputField todo={todo} setTodo={setTodo} />
      </div>
    </TaskifyContextProvider>
  );
};

export default App;

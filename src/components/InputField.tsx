import { ChangeEvent, FormEvent, useContext } from "react";
import { TaskifyContext } from "../context/TaskifyContext";

interface InputFieldProps {
  todo: string | (() => string);
  setTodo: React.Dispatch<React.SetStateAction<string | (() => string)>>;
}

const InputField = ({ todo, setTodo }: InputFieldProps) => {
  const { todos, setTodos } = useContext(TaskifyContext);

  function handleSetting(e: ChangeEvent<HTMLInputElement>) {
    setTodo(e.target.value);
  }

  function handleFormSubmit(e: FormEvent) {
    e.preventDefault();
    if (todo) {
      setTodos([...todos, { id: Date.now(), todo, isDone: false }]);
      setTodo("");
    }
  }

  return (
    <form
      id="form"
      onSubmit={handleFormSubmit}
      className="relative flex w-[90%] items-center justify-center"
    >
      <input
        type="text"
        placeholder="Enter a task"
        value={todo as string}
        onChange={handleSetting}
        className="peer relative w-full rounded-[50px] border-b-4 border-blue-700 px-[30px] py-[20px] text-2xl outline-0 transition duration-200 hover:top-[2px] hover:border-b-0 focus:top-[2px] focus:border-b-0 focus:shadow-[0_0_10px_100vh_rgba(0,0,0,0.5)] md:w-2/3"
      />
      <button className="absolute right-0 m-[12px] h-[50px] w-[50px] rounded-[50px] border-0 bg-blue-700 text-[15px] text-white shadow-[0_0_10px_black] transition-all duration-200 hover:bg-blue-500 active:scale-[.8] active:shadow-[0_0_5px_black] peer-hover:top-[2px] peer-focus:top-[2px] md:right-[17%]">
        Go
      </button>
    </form>
  );
};

export default InputField;

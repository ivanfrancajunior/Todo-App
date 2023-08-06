import { useState, FormEvent } from "react";

type Props = {
  onEnter: (taskName: string) => void;
};

export const InputItems = ({ onEnter }: Props) => {
  const [text, setText] = useState("");
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onEnter(text)
    setText("");
  };
  return (
    <form onSubmit={handleSubmit} className="flex items-center justify-start">
      <input
        type="text"
        placeholder="+"
        className=" flex items-center justify-start gap-4 px-3 py-2 min-w-[300px] rounded-md bg-slate-800 my-4 placeholder:text-green-600  text-xl"
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyUp={() => null}
      />
    </form>
  );
};

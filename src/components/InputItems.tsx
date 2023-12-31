import { useState, FormEvent } from "react";

type Props = {
  onEnter: (taskName: string) => void;
};

export const InputItems = ({ onEnter }: Props) => {
  const [text, setText] = useState("");
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onEnter(text);
    setText("");
  };
  return (
    <form onSubmit={handleSubmit} className="flex items-center justify-start">
      <input
        type="text"
        placeholder="+"
        className=" flex items-center justify-start gap-4 px-3 py-2 min-w-[400px] md:min-w-[520px] max-w-[800px] rounded-md bg-zinc-900 my-4 placeholder:text-green-600 text-2xl mt-10"
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyUp={() => null}
      />
    </form>
  );
};

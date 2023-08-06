import { useState } from "react";
import { todoItem } from "../types/Item";

type Props = {
  item: todoItem;
};

const ListItem = ({ item }: Props) => {
  const [done, setDone] = useState(item.isCheck);
  return (
    <div
      key={item.id}
      className="flex items-center justify-around gap-2 py-2 w-[380px] rounded-md bg-slate-800 my-1 mx-auto"
    >
      <span>
        {" "}
        <input
          type="checkbox"
          name=""
          checked={done}
          onChange={(e) => setDone(e.target.checked)}
          className={` flex accent-green-500 `}
        />
        
      </span>
      <label
        className={`bg-slate-800 my-1 p-1  ${
          done ? "text-green-500 line-through " : ""
        }`}
      >
        {item.task}
      </label>
    </div>
  );
};

export default ListItem;

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
      className="flex items-center p-2 my-2 only:justify-between gap-5  w-full max-w-[400px] md:min-w-[500px] rounded-md bg-[#171717]  "
    >
      <div className="flex items-center justify-center ml-5 ">
        {" "}
        <input
          type="checkbox"
          name=""
          checked={done}
          onChange={(e) => setDone(e.target.checked)}
          className=" flex accent-green-500 rounded-md w-4 h-4"
        />
      </div>

      <p
        className={`bg-[#171717] my-1  w-[300px] ${
          done ? "text-green-500 line-through " : ""
        }`}
      >
        {item.task}
      </p>
    </div>
  );
};

export default ListItem;

import { useState } from "react";
import { todoItem } from "./types/Item";
import ListItem from "./components/ListItem";
import { InputItems } from "./components/InputItems";
import Header from "./components/Header";

function App() {
  const [list, setList] = useState<todoItem[]>([]);

  const handleAddtask = (taskName: string) => {
    const newList = [...list];

    newList.push({
      id: list.length + 1,
      task: taskName,
      isCheck: false,
    });
    setList(newList);
  };

  return (
    <main className="container flex flex-col items-center justify-center ">
      <Header />
      <InputItems onEnter={handleAddtask} />

      {list && list.map((item, index) => <ListItem key={index} item={item} />)}
    </main>
  );
}

export default App;

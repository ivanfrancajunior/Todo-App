import { useState } from "react";
import { todoItem } from "./types/Item";
import ListItem from "./components/ListItem";
import { InputItems } from "./components/InputItems";

function App() {
  const [list, setList] = useState<todoItem[]>([
    { id: 1, task: "Tarefa 1", isCheck: true },
    { id: 2, task: "Tarefa 2", isCheck: false },
  ]);

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
    <main className="container flex flex-col items-center justify-center mt-4">
      <p className="my-10 italic ">Adicione suas tarefas</p>
      <InputItems onEnter={handleAddtask} />

      <hr className="w-5 my-4" />
      {list && list.map((item, index) => <ListItem key={index} item={item} />)}
    </main>
  );
}

export default App;

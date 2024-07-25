import { useState } from "react";
import ListTask from "./ListTask";

const TodoApp = () => {
  const [newTask, setNewTask] = useState<string>("");
  const [todo, setTodo] = useState<string[]>([]);

  //console.log(newTask);

  const handleAddTask = () => {};

  return (
    <div>
      <h1>Lista de Tareas</h1>
      <div>
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Nueva Tarea"
        />
        <button onClick={handleAddTask}></button>
      </div>
      <ListTask listTask={todo} />
    </div>
  );
};

export default TodoApp;

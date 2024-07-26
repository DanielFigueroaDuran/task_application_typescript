import { useState } from "react";
import ThingsTodo from "./ThingsTodo";

const TodoApp = () => {
  const [newTask, setNewTask] = useState<string>("");
  const [todo, setTodo] = useState<string[]>([]);

  //console.log(newTask);

  const handleAddTask = () => {
    if (newTask.trim() === "") return;
    setTodo((prev) => [...prev, newTask]);
    setNewTask("");
  };

  const handleDeleteTask = (index: number) => {
    setTodo((task) => task.filter((_, i) => i !== index));
  };

  return (
    <div>
      <h1>Lista de Tareas</h1>
      <div className="flex">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Nueva Tarea"
        />
        <button onClick={handleAddTask}>Agregar Tarea</button>
      </div>

      <ThingsTodo list={todo} deleteTask={handleDeleteTask} />
    </div>
  );
};

export default TodoApp;

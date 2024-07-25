import { useState } from "react";

const TodoApp = () => {
  const [newTask, setNewTask] = useState("");
  const [todo, setTodo] = useState([]);

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
    </div>
  );
};

export default TodoApp;

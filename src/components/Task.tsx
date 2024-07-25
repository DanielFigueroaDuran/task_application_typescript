type Task = {
  task: string;
  deleteTask: () => void;
};

const Task = ({ task, deleteTask }: Task) => {
  return (
    <div className="task">
      <span>{task}</span>
      <button onClick={deleteTask}>Borrar Tarea</button>
    </div>
  );
};

export default Task;

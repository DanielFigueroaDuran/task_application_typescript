import Task from "./Task";

type ListTask = {
  listTask: string[];
  deleteTask: (index: number) => void;
};

const ListTask = ({ listTask, deleteTask }: ListTask) => {
  return;
  <div className="taskList">
    {listTask.map((task, index) => (
      <Task key={index} task={task} deleteTask={() => deleteTask} />
    ))}
  </div>;
};

export default ListTask;

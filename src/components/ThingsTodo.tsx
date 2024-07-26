import Tasks from "./Tasks";

type TaskList = {
  list: string[];
  deleteTask: (index: number) => void;
};

const ThingsTodo = ({ list, deleteTask }: TaskList) => {
  return (
    <div className="taskList">
      {list.map((task, index) => (
        <Tasks key={index} task={task} deleteTask={() => deleteTask(index)} />
      ))}
    </div>
  );
};

export default ThingsTodo;

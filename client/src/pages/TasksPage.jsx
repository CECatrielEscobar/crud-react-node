// import { useAuth } from "../context/AuthContext";
import { useEffect } from "react";
import { useTasks } from "../context/TasksContext";
import { TasksCard } from "../components/TasksCard";

const TasksPage = () => {
  const { tasks, getTasks } = useTasks();
  useEffect(() => {
    getTasks();
  }, [getTasks]);
  if (tasks.length === 0) return <h1>No tasks</h1>;
  return (
    <div className="grid sm:grid-cols-1  md:grid-cols-2 xl:grid-cols-3 gap-2">
      {tasks.map((task) => (
        <TasksCard task={task} key={task._id} />
      ))}
    </div>
  );
};

export default TasksPage;

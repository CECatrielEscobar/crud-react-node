import { useTasks } from "../context/TasksContext";
import { Link } from "react-router-dom";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
dayjs.extend(utc);

// eslint-disable-next-line react/prop-types
export const TasksCard = ({ task }) => {
  const { deleteTask } = useTasks();
  return (
    <div className="bg-zinc-800 max-w-md w-full p-10 rounded-md my-2">
      <header className="flex justify-between">
        {/* eslint-disable-next-line react/prop-types */}
        <h1 className="text-2xl font-bold">{task.title}</h1>
        <div className="flex gap-x-2 items-center">
          {/* eslint-disable-next-line react/prop-types */}
          <button
            onClick={() => deleteTask(task._id)}
            className=" bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md"
          >
            Delete
          </button>
          {/* eslint-disable-next-line react/prop-types */}
          <Link
            to={`/tasks/${task._id}`}
            className=" bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md"
          >
            Edit
          </Link>
        </div>
      </header>
      {/* eslint-disable-next-line react/prop-types */}
      <p className="text-slate-300">{task.description}</p>
      {/* eslint-disable-next-line react/prop-types */}
      <p>{dayjs(task.date).utc().format("DD/MM/YYYY")}</p>
    </div>
  );
};

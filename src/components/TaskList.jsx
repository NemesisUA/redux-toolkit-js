import { useSelector } from "react-redux"
import TaskItem from "./TaskItem";


const TaskList = () => {
  const tasks = useSelector(state => state.tasksSlice.tasks);

  return (
    <ul>
      {
        tasks.map(task =>
          <TaskItem key={task.id} {...task} />
        )
      }
    </ul>
  )
}

export default TaskList
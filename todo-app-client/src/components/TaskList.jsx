import { TaskRow } from './TaskRow'

export default function TaskList({ tasks, refreshLists }) {
  return (
    <ul>
      {tasks.map((task) => (
        <TaskRow
          key={task._id}
          _id={task._id}
          name={task.name}
          completed={task.completed}
          refreshLists={refreshLists}
        />
      ))}
    </ul>
  )
}

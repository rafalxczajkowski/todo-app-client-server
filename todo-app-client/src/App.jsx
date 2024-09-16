import { useState, useEffect } from 'react'
import './App.css'
import TaskList from './components/TaskList'
import NewTaskForm from './components/NewTaskForm'

export const apiPath = 'http://localhost:3000/api/'

function App() {
  const [tasks, setTasks] = useState([])

  useEffect(() => {
    try {
      refreshLists()
    } catch (error) {
      console.error(error)
    }
  }, [])

  async function refreshLists() {
    const res = await fetch(apiPath)
    const data = await res.json()
    setTasks(data)
  }

  const completedTasks = tasks.filter((task) => task.completed)
  const uncompletedTasks = tasks.filter((task) => !task.completed)

  return (
    <main>
      <h3>Your Todo list</h3>
      <TaskList tasks={uncompletedTasks} refreshLists={refreshLists} />
      <NewTaskForm refreshLists={refreshLists} />
      <TaskList tasks={completedTasks} refreshLists={refreshLists} />
    </main>
  )
}

export default App

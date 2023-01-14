import { useEffect, useState } from 'react'
import './App.css'
import { Footer } from './components/Footer/Footer'
import { Header } from './components/Header/Header'
import { Main } from './components/Main/Main'

const TODO_LIST_LS_KEY = 'TODO_LIST_LS_KEY '

function App() {
  const [todos, setTodos] = useState(() => {
    const dataFormLS = localStorage.getItem(TODO_LIST_LS_KEY)

    const preparedData = dataFormLS ? JSON.parse(dataFormLS) : []

    return preparedData
  })

  useEffect(() => {
    localStorage.setItem(TODO_LIST_LS_KEY, JSON.stringify(todos))
  }, [todos])

  const addNewTodo = (title) => {
    const newTodo = {
      id: crypto.randomUUID(),
      completed: false,
      title,
    }

    setTodos((prev) => [newTodo, ...prev])
  }

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((tobo) => tobo.id !== id))
  }

  const changeStatusTodo = (id) => {
    setTodos((prev) => prev.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          completed: !todo.completed,
        }
      }
      return todo
    }))
  }

  const clearAllTodo = () => {
    setTodos([])
  }

  return (
    <div className="container">
      <Header addNewTodo={addNewTodo} />
      <Main
        todos={todos}
        changeStatusTodo={changeStatusTodo}
        deleteTodo={deleteTodo}
      />
      <Footer clearAllTodo={clearAllTodo} />
    </div>
  )
}

export default App

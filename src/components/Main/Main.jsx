import { TodoList } from '../TodoList/TodoList'
import './Main.css'

export function Main({ todos, changeStatusTodo, deleteTodo }) {
  return (
    <main>
      <TodoList
        todos={todos}
        changeStatusTodo={changeStatusTodo}
        deleteTodo={deleteTodo}
      />
    </main>
  )
}

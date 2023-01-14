import { TodoItem } from '../TodoItem/TodoItem'
import './TodoList.css'

export function TodoList({ todos, changeStatusTodo, deleteTodo }) {
  if (!todos.length) {
    return <p>List is empty ...</p>
  }
  return (
    <ul className="list-group">
      {todos.map((todo, index) => (
        <TodoItem
          key={todo.id}
          id={todo.id}
          title={todo.title}
          index={index}
          completed={todo.completed}
          changeStatusTodo={changeStatusTodo}
          deleteTodo={deleteTodo}
        />
      ))}
    </ul>
  )
}

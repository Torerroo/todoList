import './Footer.css'

export function Footer({ clearAllTodo }) {
  return (
    <footer>
      <button onClick={clearAllTodo} type="button">Clear all</button>
    </footer>
  )
}

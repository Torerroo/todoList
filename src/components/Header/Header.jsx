import { Form } from '../Form/Form'
import './Header.css'

export function Header({ addNewTodo }) {
  return (
    <header>
      <Form addNewTodo={addNewTodo} />
    </header>
  )
}

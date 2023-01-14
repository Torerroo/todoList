import { useState } from 'react'
import './Form.css'

export function Form({ addNewTodo }) {
  const [title, setTitle] = useState('')

  const changeHandler = (e) => {
    setTitle(e.target.value)
  }

  const submitHandler = (e) => {
    e.preventDefault()

    if (title.length) {
      addNewTodo(title)
      setTitle('')
    }
  }

  return (
    <form onSubmit={submitHandler} className="form">
      <input
        value={title}
        onChange={changeHandler}
        className="formInput"
        type="text"
        placeholder="Текст..."
      />
      <div className="formDiv">
        <button type="submit" className="formBtn">
          Добавить
        </button>
        {/* <button className="formBtn">Удалить</button> */}
      </div>
    </form>
  )
}

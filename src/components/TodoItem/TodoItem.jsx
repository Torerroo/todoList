import { useState } from 'react'
import { Modal } from '../Modal/Modal'
import './TodoItem.css'

export function TodoItem({
  title,
  id,
  index,
  completed,
  changeStatusTodo,
  // deleteTodo,
}) {
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false)

  const closeDeleteModalHandler = () => {
    setIsDeleteModalOpen(false)
  }

  const openDeleteModalHandler = () => {
    setIsDeleteModalOpen(true)
  }

  const completeHandler = () => {
    changeStatusTodo(id)
  }

  // const deleteHandler = () => {
  //   deleteTodo(id)
  // }

  return (
    <li className="list-group-item">
      <span className={completed ? 'list-group-itemdone' : ''}>
        {index + 1}
        {'. '}
        {title}
      </span>

      <Modal isOpen={isDeleteModalOpen} closeHandler={closeDeleteModalHandler}>
        <p>Hello from</p>
      </Modal>

      <div>
        <button
          onClick={completeHandler}
          type="button"
          className={!completed ? 'list-group-itembtn' : 'list-group-itembtn2'}
        >
          {completed ? 'Undone' : 'Done'}
        </button>
        <button
          onClick={openDeleteModalHandler}
          type="button"
          className="list-group-itembtn"
        >
          Delete
        </button>
      </div>
    </li>
  )
}

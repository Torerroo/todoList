import { useEffect } from 'react'
import { createPortal } from 'react-dom'
import './Modal.css'

export function Modal({ isOpen, closeHandler, children }) {
  useEffect(() => {
    const closeModalByEscape = (e) => {
      if (e.key === 'Escape') {
        closeHandler()
      }
    }

    document.addEventListener('keydown', closeModalByEscape)

    return () => {
      document.removeEventListener('keydown', closeModalByEscape)
    }
  }, [])

  if (!isOpen) return null
  return createPortal(
    <div className="modalWr">{children}</div>,
    document.getElementById('modal-root'),
  )
}

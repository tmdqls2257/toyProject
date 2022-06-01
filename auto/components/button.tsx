import React from 'react'
import styles from '../css/button.module.css'
type buttonType = {
  children: string
  className: string
  onClick: () => void
}

const Button = ({ children, className, onClick }: buttonType) => {
  return (
    <>
      <button onClick={onClick} className={styles[className]}>
        {children}
      </button>
    </>
  )
}

export default Button

import React from 'react'
import styles from './InputArea.module.scss'

const InputArea = ({ disabled = false, ...props }) => {

  return (
    <textarea
      className={styles.InputArea}
      disabled={disabled}
      {...props}
    />
  )
}

export default InputArea
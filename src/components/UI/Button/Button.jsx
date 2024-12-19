import React from 'react'
import styles from './Button.module.scss'

const Button = ({children, className, ...props}) => {

  return (
    <button 
      className={styles.button + " " + className}
      onClick={props.onClick}
      {...props}
    >{props.text}{children}</button>
  )
}

export default Button
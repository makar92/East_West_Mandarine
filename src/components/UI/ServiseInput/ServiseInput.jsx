import React from 'react'
import styles from './ServiseInput.module.scss'

const ServiseInput = ({disabled = false, ...props}) => {

  return (
    <input 
      className={styles.serviseInput}
      disabled={disabled}
      {...props}
    />
  )
}

export default ServiseInput
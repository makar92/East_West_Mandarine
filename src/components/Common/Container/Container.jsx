import React from 'react'
import styles from './Container.module.scss'

const Container = ({children, ...props}) => {
  return (
    <div className={styles.container + " " + props.className}>
      {children}
    </div>
  )
} 

export default Container
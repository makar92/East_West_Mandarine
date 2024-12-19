import React from 'react'
import styles from './Loader.module.scss'

const Loader = (props) => {
  return (
    <div className={styles.loader}>
      <div className={styles.spiner}></div>
      <div className={styles.text}>{props.text}</div>
    </div>
  )
}

export default Loader
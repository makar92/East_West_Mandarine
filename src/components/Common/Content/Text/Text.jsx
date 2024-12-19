import React from 'react'
import styles from './Text.module.scss'
import "./aditionalStyles.scss"

const Text = (props) => {

  return (
    <div className={styles.textBlock}>
      <div dangerouslySetInnerHTML={{ __html: props.content }} />
    </div>
  )
}

export default Text
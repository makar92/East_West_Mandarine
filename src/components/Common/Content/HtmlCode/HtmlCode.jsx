import React from 'react'
import styles from './HtmlCode.module.scss'

const HtmlCode = (props) => {

  return (
    <div className={styles.htmlCode}>
      <div dangerouslySetInnerHTML={{ __html: props.content.htmlCode }} />
    </div>
  )
}

export default HtmlCode
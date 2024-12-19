import React, { useEffect, useState } from 'react'
import styles from './ButtonAnswer.module.scss'

const ButtonAnswer = ({isAnswer, correctAnswer, ...props}) => {

  const [style, setStyle] = useState(styles.button + " " + styles.isWait)

  useEffect(() => {
    if (isAnswer && correctAnswer === props.text) {
      setStyle(styles.button + " " + styles.isRight)
   
    } else if (isAnswer && correctAnswer !== props.text) {
      setStyle(styles.button + " " + styles.isWrong)
    }
  }, [isAnswer])

  return (
    <button 
      className={style}
      disabled={isAnswer ? true : false}
      {...props}
    >{props.text}</button>
  )
}

export default ButtonAnswer
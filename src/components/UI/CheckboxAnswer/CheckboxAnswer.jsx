import React, { useEffect, useState } from 'react'
import styles from './CheckboxAnswer.module.scss'

const CheckboxAnswer = ({isAnswer, userAnswers, correctAnswers, ...props}) => {

  const [style, setStyle] = useState(styles.button + " " + styles.isWait)

  const [isChecked, setIsChecked] = useState(false)
  const [correctAnswer, setCorrectAnswer] = useState("")

  useEffect(() => {
    if (correctAnswers.some(answer => answer === props.text)) {
      setCorrectAnswer(props.text)
    }
  }, [])

  useEffect(() => {
    if (isAnswer && correctAnswer === props.text) {
      setStyle(prevStyle => `${styles.button} ${styles.isRight}`);
    } else if (isAnswer && correctAnswer !== props.text) {
      setStyle(prevStyle => `${styles.button} ${styles.isWrong}`);
    } else if (isChecked) {
      setStyle(prevStyle => `${styles.button} ${styles.checked}`);
    } else {
      setStyle(prevStyle => `${styles.button} ${styles.isWait}`);
    }
  }, [isAnswer, isChecked]);

  useEffect(() => {
    const isChecked = userAnswers.some(answer => answer === props.text);
    setIsChecked(isChecked);
  }, [userAnswers, props.text]);

  return (
    <button 
      className={style}
      disabled={isAnswer ? true : false}
      {...props}
    >{props.text}</button>
  )
}

export default CheckboxAnswer
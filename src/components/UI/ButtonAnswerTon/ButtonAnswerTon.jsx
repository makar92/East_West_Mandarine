import React, { useEffect, useState } from 'react'
import styles from './ButtonAnswerTon.module.scss'

const ButtonAnswerTon = ({tonIsSelected, answer2, isAnswer, ...props}) => {

  const [classN, setClassN] = useState(styles.button + " " + styles.isWait)

  useEffect(() => {
    if (tonIsSelected && answer2 === props.text) {
      setClassN(styles.button + " " + styles.isSelected)
   
    } else if (tonIsSelected && answer2 !== props.text || isAnswer) {
      setClassN(styles.button + " " + styles.isNotSelected)
    } else {
      setClassN(styles.button + " " + styles.isWait)
    }
    
  }, [tonIsSelected, isAnswer])

  return (
    <button 
      className={classN}
      disabled={tonIsSelected || isAnswer ? true : false}
      {...props}
    >{props.text}</button>
  )
}

export default ButtonAnswerTon
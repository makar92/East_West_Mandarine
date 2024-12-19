import React from 'react'
import styles from './Result.module.scss'
import { AiFillCheckCircle, AiFillCloseCircle } from 'react-icons/ai'

const Result = ({isCorrectAnswer}) => {

  return (
    <div 
      className={isCorrectAnswer
        ? styles.result + " " + styles.correct
        : styles.result + " " + styles.uncorrect
      }
    >
      {isCorrectAnswer
        ? <AiFillCheckCircle className={styles.icon}/> 
        : <AiFillCloseCircle className={styles.icon}/>
      }
    </div>
  )
}

export default Result
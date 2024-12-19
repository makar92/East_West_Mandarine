import React from 'react'
import styles from './CorrectAnswer.module.scss'

const CorrectAnswer = ({ text, tons }) => {

  let lettersText = []

  if (text !== undefined) {
    lettersText = text.split('')
  }

  return (
    <div className={styles.correctAnswer}>
      <div className={styles.text}>Правильный ответ:</div>
      <div className={styles.answer}>
        {lettersText.map((item, index) => (
          <div key={index} className={styles.column}>
            {tons && <div className={styles.ton}>{tons[index]}</div>}
            <div className={styles.letter}>{item}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CorrectAnswer
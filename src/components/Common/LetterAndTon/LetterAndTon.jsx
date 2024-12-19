import React, { useEffect, useState } from 'react'
import styles from './LetterAndTon.module.scss'
import { vowels } from '../../../utils/constForExersizes'

const LetterAndTon = ({letter, ton, isAnswer, ...props}) => {

  const [bg, setBg] = useState(styles.passive)

  useEffect(() => {
    if (vowels.includes(letter)) {
      setBg(styles.activ)
    } 
    if (ton || isAnswer) {
      setBg(styles.transparent)
    }
  }, [ton, isAnswer, letter])

  return (
    <div className={styles.letterAndTon}>
    <button 
      className={styles.ton + " " + bg}
      onClick={props.onClick} 
      disabled={ton || isAnswer ? true : false}
    >{ton}</button>
      <div className={styles.letter}>{letter}</div>
    </div>
  )
}

export default LetterAndTon
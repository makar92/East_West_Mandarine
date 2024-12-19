import React, { useEffect, useMemo, useState } from 'react'
import styles from './ExersizePinin2.module.scss'
import ButtonAnswerTon from '../../../UI/ButtonAnswerTon/ButtonAnswerTon'
import Button from '../../../UI/Button/Button'
import LetterAndTon from '../../LetterAndTon/LetterAndTon'
import { tons } from '../../../../utils/constForExersizes'
import Result from '../Common/Result/Result'
import CorrectAnswer from '../Common/CorrectAnswer/CorrectAnswer'

const ExersizePinin2 = (props) => {

  const qwestion2 = "Расставте тоны!"

  const correctAnswer = props.content.correctTons

  const [isAnswer, setIsAnswer] = useState(false)
  const [isCorrectAnswer, setIsCorrectAnswer] = useState(false)
  const [tonsResalt, setTonsResult] = useState([])
  const [answer, setAnswer] = useState("")
  const [tonIsSelected, setTonIsSelected] = useState(false)
  const [isActivButtonAnswer, setIsActivButtonAnswer] = useState(false)

  //Разделяем слово на массив из букв
  const wordLetters = useMemo(() => props.content.text.split(''), [props.content.text]);

  //выбрать нужный тон
  const setTon = (event) => {
    const chosenAnswer = event.target.textContent
    setAnswer(chosenAnswer)
    setTonIsSelected(true)
  }

  //Положить выбраный тон в нужный инпут
  const putInInputTon = (index) => {
    setTonIsSelected(false)
    // Создаем новый массив, в котором изменяем только элемент с заданным индексом
    setTonsResult(prevState => {
      return prevState.map((item, i) => {
        if (i === index) return answer
        else return item
      })
    })
  }

  //Зафиксировать ответ
  const toAnswer = () => {
    //Проверяем правильность ответа
    if (
      JSON.stringify(tonsResalt) === JSON.stringify(correctAnswer)
    ) {
      setIsAnswer(true)
      setIsCorrectAnswer(true)
    } else {
      setIsAnswer(true)
    }
  }

  //Создаем массив пустых значений в зависимости от wordLetters
  useEffect(() => {
    setTonsResult(Array(wordLetters.length).fill(''))
  }, [wordLetters])

  // Проверяем наличие ответа для активации кнопки "ответить"
  useEffect(() => {
    if (tonsResalt.some(str => str.trim() !== '')) {
      setIsActivButtonAnswer(true)
    }
  }, [tonsResalt])

  return (
    <div className={styles.exersizePinin}>
      <div className={styles.header}>
        {!isAnswer && <div className={styles.question}>{qwestion2}</div>}
        {isAnswer &&
          <div className={styles.result}>
            <Result isCorrectAnswer={isCorrectAnswer} />
            {!isCorrectAnswer &&
              <CorrectAnswer text={props.content.text} tons={correctAnswer} />
            }
          </div>
        }
      </div>
      <div className={styles.field}>
        {wordLetters.map((item, index) => (
          <LetterAndTon
            key={index}
            letter={item}
            ton={tonsResalt[index]}
            isAnswer={isAnswer}
            onClick={() => putInInputTon(index)}
          />
        ))}
      </div>
      <div className={styles.answers}>
        {tons.map((item) => (
          <ButtonAnswerTon
            key={item}
            text={item}
            onClick={setTon}
            tonIsSelected={tonIsSelected}
            answer2={answer}
            isAnswer={isAnswer}
          />
        ))}
      </div>
      <div className={styles.footer}>
        {isActivButtonAnswer && !isAnswer &&
          <div className={styles.absolut}>
            <Button text="ответить" onClick={toAnswer} />
          </div>
        }
        {isActivButtonAnswer && isAnswer &&
          <div className={styles.absolut}>
            <Button text="далее" onClick={() => { }} />
          </div>
        }
      </div>
    </div>
  )
}

export default ExersizePinin2
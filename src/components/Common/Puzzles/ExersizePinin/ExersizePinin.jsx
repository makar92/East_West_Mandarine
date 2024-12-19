import React, { useEffect, useMemo, useState } from 'react'
import styles from './ExersizePinin.module.scss'
import ButtonAnswer from '../../../UI/ButtonAnswer/ButtonAnswer'
import ButtonAnswerTon from '../../../UI/ButtonAnswerTon/ButtonAnswerTon'
import Button from '../../../UI/Button/Button'
import LetterAndTon from '../../LetterAndTon/LetterAndTon'
import { tons } from '../../../../utils/constForExersizes'
import Result from '../Common/Result/Result'
import CorrectAnswer from '../Common/CorrectAnswer/CorrectAnswer'

const ExersizePinin = (props) => {

  const qwestion1 = "Выберете нужный слог!"
  const qwestion2 = "Расставте тоны!"
  const answers1 = props.content.variantAnswers
  const correctAnswer1 = props.content.correctAnswer
  const correctAnswer2 = props.content.correctTons

  const [answer1, setAnswer1] = useState("")
  const [isAnswer1, setIsAnswer1] = useState(false)
  const [isAnswer, setIsAnswer] = useState(false)
  const [isCorrectAnswer, setIsCorrectAnswer] = useState(false)
  const [tonsResalt, setTonsResult] = useState([])
  const [answer2, setAnswer2] = useState("")
  const [tonIsSelected, setTonIsSelected] = useState(false)
  const [isActivButtonAnswer, setIsActivButtonAnswer] = useState(false)

  const wordLetters = useMemo(() => answer1.split(''), [answer1]);

  const toAnswer1 = (event) => {
    const chosenAnswer = event.target.textContent
    setIsAnswer1(true)
    setAnswer1(chosenAnswer)
  }

  //выбрать нужный тон
  const toAnswer2 = (event) => {
    const chosenAnswer = event.target.textContent
    setAnswer2(chosenAnswer)
    setTonIsSelected(true)
  }

  //Положить выбраный тон в нужный инпут
  const putInInputTon = (index) => {
    setTonIsSelected(false)
    // Создаем новый массив, в котором изменяем только элемент с заданным индексом
    setTonsResult(prevState => {
      return prevState.map((item, i) => {
        if (i === index) return answer2
        else return item
      })
    })
  }

  //Создаем массив пустых значений в зависимости от выбора answer1
  useEffect(() => {
    setTonsResult(Array(wordLetters.length).fill(''))
  }, [answer1,])

  // Проверяем наличие второго ответа для активации кнопки "ответить"
  useEffect(() => {
    if (tonsResalt.some(str => str.trim() !== '')) {
      setIsActivButtonAnswer(true)
    }
  }, [tonsResalt])

  //Зафиксировать ответ
  const toAnswer = () => {
    //Проверяем правильность ответа
    if (
      JSON.stringify(tonsResalt) === JSON.stringify(correctAnswer2) &&
      answer1 === correctAnswer1
    ) {
      setIsAnswer(true)
      setIsCorrectAnswer(true)
    } else {
      setIsAnswer(true)
    }
  }

  return (
    <div className={styles.exersizePinin}>
      <div className={styles.header}>
        {!isAnswer1 && <div className={styles.question}>{qwestion1}</div>}
        {isAnswer1 && !isAnswer && <div className={styles.question}>{qwestion2}</div>}
        {isAnswer &&
          <div className={styles.result}>
            <Result isCorrectAnswer={isCorrectAnswer} />
            {!isCorrectAnswer &&
              <CorrectAnswer text={correctAnswer1} tons={correctAnswer2} />
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
      {!isAnswer1 && <div className={styles.answers}>
        {answers1.map((item) => (
          <ButtonAnswer key={item} text={item} onClick={toAnswer1} />
        ))}
      </div>}
      {isAnswer1 && <div className={styles.answers}>
        {tons.map((item) => (
          <ButtonAnswerTon
            key={item}
            text={item}
            onClick={toAnswer2}
            tonIsSelected={tonIsSelected}
            answer2={answer2}
            isAnswer={isAnswer}
          />
        ))}
      </div>}
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

export default ExersizePinin
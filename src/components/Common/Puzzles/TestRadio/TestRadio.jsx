import React, { useState } from 'react'
import styles from './TestRadio.module.scss'
import ButtonAnswer from '../../../UI/ButtonAnswer/ButtonAnswer'
import Result from '../Common/Result/Result'
import Button from '../../../UI/Button/Button'
import { useDispatch, useSelector } from 'react-redux'
import { setStepNumber } from '../../../../store/course/course'

const TestRadio = (props) => {

  const dispatch = useDispatch()
  const stepNumber = useSelector(state => state.course.stepNumber)
  const steps = useSelector(state => state.course.steps)
  const [isAnswer, setIsAnswer] = useState(false)
  const [isCorrectAnswer, setIsCorrectAnswer] = useState(false)

  const correctAnswer = props.content.correctAnswer
  const answers = props.content.answers

  const toAnswer = (event) => {
    const chosenAnswer = event.target.textContent;
    if (chosenAnswer === correctAnswer) {
      setIsCorrectAnswer(true)
    }
    setIsAnswer(true)
  }

  const openNextStep = () => {
    if (stepNumber < steps.length - 1) {
      dispatch(setStepNumber({stepNumber: stepNumber + 1}))
    }
  }

  return (
    <div className={styles.testRadio}>
      <div className={styles.content}>
        {isAnswer && <div className={styles.result}>
          <Result isCorrectAnswer={isCorrectAnswer} />
        </div>}
        {!isAnswer &&
          <div className={styles.text}>Выберите один ответ</div>
        }
      </div>
      <div className={styles.answers}>
        {answers.map((item) => (
          <ButtonAnswer
            key={item}
            isAnswer={isAnswer}
            correctAnswer={correctAnswer}
            onClick={toAnswer}
            text={item}
          />
        ))}
      </div>
      {isAnswer && 
      <div className={styles.footer}>
        <Button text="next" onClick={openNextStep}/>
      </div>
      }
    </div>
  )
}

export default TestRadio
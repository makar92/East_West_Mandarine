import React, { useState } from 'react'
import styles from './TestCheckbox.module.scss'
import Result from '../Common/Result/Result'
import Button from '../../../UI/Button/Button'
import { useDispatch, useSelector } from 'react-redux'
import { setStepNumber } from '../../../../store/course/course'
import CheckboxAnswer from '../../../UI/CheckboxAnswer/CheckboxAnswer'
import { arraysEqual } from '../../../../utils/someFunctions'

const TestCheckbox = (props) => {

  const dispatch = useDispatch()
  const stepNumber = useSelector(state => state.course.stepNumber)
  const steps = useSelector(state => state.course.steps)
  const [isAnswer, setIsAnswer] = useState(false)
  const [isCorrectAnswer, setIsCorrectAnswer] = useState(false)
  const [userAnswers, setUserAnswers] = useState([])

  const correctAnswers = props.content.correctAnswers
  const answers = props.content.answers

  const addUserAnswer = (item, index) => {
    setUserAnswers([...userAnswers, item])
  }

  const toAnswer = () => {
    if (arraysEqual(correctAnswers, userAnswers)) {
      console.log("you win!")
      setIsCorrectAnswer(true)
    }
    setIsAnswer(true)
  }

  const openNextStep = () => {
    if (stepNumber < steps.length - 1) {
      dispatch(setStepNumber({ stepNumber: stepNumber + 1 }))
    }
  }

  return (
    <div className={styles.testCheckbox}>
      <div className={styles.content}>
        {isAnswer && <div className={styles.result}>
          <Result isCorrectAnswer={isCorrectAnswer} />
        </div>}
        {!isAnswer &&
          <div className={styles.text}>Выберите один или несколько ответов</div>
        }
      </div>
      <div className={styles.answers}>
        {answers.map((item, index) => (
          <CheckboxAnswer
            key={index}
            isAnswer={isAnswer}
            correctAnswers={correctAnswers}
            userAnswers={userAnswers}
            onClick={() => addUserAnswer(item, index)}
            text={item}
          />
        ))}
      </div>
      <div className={styles.footer}>
        {isAnswer && <Button text="next" onClick={openNextStep} />}
        {!isAnswer && <Button text="ответить" onClick={() => toAnswer()} />}
      </div>
    </div>
  )
}

export default TestCheckbox
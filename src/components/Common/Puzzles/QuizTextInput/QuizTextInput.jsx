import React, { useState } from 'react'
import styles from './QuizTextInput.module.scss'
import Input from '../../../UI/Input/Input'
import Button from '../../../UI/Button/Button'
import Result from '../Common/Result/Result'
import { useDispatch, useSelector } from 'react-redux'
import { setStepNumber } from '../../../../store/course/course'

const QuizTextInput = (props) => {

  const dispatch = useDispatch()
  const stepNumber = useSelector(state => state.course.stepNumber)
  const steps = useSelector(state => state.course.steps)
  const [userAnswer, setUserAnswer] = useState("")
  const [isCorrectAnswer, setIsCorrectAnswer] = useState(false)
  const [isAnswer, setIsAnswer] = useState()
  
  const correctAnswers = props.content.correctAnswers

  const toAnswer = () => {
    const isCorrect = correctAnswers.includes(userAnswer.trim())
    setIsCorrectAnswer(isCorrect)
    setIsAnswer(true)
  }

  const openNextStep = () => {
    if (stepNumber < steps.length - 1) {
      dispatch(setStepNumber({ stepNumber: stepNumber + 1 }))
    }
  }

  return (
    <div className={styles.quizTextInput}>
      <div className={styles.content}>
        {isAnswer && <div className={styles.result}>
          <Result isCorrectAnswer={isCorrectAnswer} />
        </div>}
        {!isAnswer &&
          <div className={styles.text}>Напишите свой ответ</div>
        }
      </div>
      <Input 
        type="text" 
        value={userAnswer} 
        onChange={(e) => setUserAnswer(e.target.value)}
      />
      <div className={styles.footer}>
        {isAnswer && <Button text="next" onClick={openNextStep} />}
        {!isAnswer && <Button text="ответить" onClick={() => toAnswer()} />}
      </div>
    </div>
  )
}

export default QuizTextInput
import React from 'react'
import styles from './CoursePage.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import Content from '../../Common/Content/Content'
import Container from '../../Common/Container/Container'
import Button from '../../UI/Button/Button'
import PagingInput from './PagingInput/PagingInput'
import { setStepNumber } from '../../../store/course/course'
import { useNavigate } from 'react-router-dom'

const CoursePage = () => {

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const steps = useSelector(state => state.course.steps)
  const courseName = useSelector(state => state.course.courseName)
  const stepNumber = useSelector(state => state.course.stepNumber)



  return (
    <div className={styles.coursePage}>
      <Container>
        <div className={styles.courseName}>{courseName}</div>
        <div className={styles.contents}>
          {steps[stepNumber].modules.map((item, index) => (
            <Content key={index}
              contentType={item.contentType}
              content={item.content}
            />
          ))}
        </div>
      </Container>
    </div>
  )
}

export default CoursePage
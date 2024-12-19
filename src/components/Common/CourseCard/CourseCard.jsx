import React from 'react'
import styles from './CourseCard.module.scss'
import Button from '../../UI/Button/Button'
import { useDispatch, useSelector } from 'react-redux'
import { setCourse } from '../../../store/course/course'
import { useNavigate } from 'react-router-dom'
import { COURSE_PAGE_ROUTE } from '../../../routs'

const CourseCard = (props) => {

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const courses = useSelector(state => state.courses.courses)

  const openCourse = () => {
    dispatch(setCourse({
      courseID: courses[props.courseNumber].courseID,
      courseName: courses[props.courseNumber].courseName,
      courseDescription: courses[props.courseNumber].courseDescription,
      courseImage: courses[props.courseNumber].courseImage,
      steps: courses[props.courseNumber].steps,
    }))

    navigate(COURSE_PAGE_ROUTE, { replace: false })
  }

  return (
    <div className={styles.card}>
      <div className={styles.image}>
        <img src={props.courseImage} alt="img_course" />
      </div>
      <div className={styles.content}>
        <div className={styles.header}>
          <div className={styles.name}>{props.courseName}</div>
        </div>
        <div className={styles.description}>{props.courseDescription}</div>
        <div className={styles.footer}>
          <Button
            className={styles.button}
            text="Go to Course"
            onClick={openCourse}
          />
        </div>
      </div>
    </div>
  )
}

export default CourseCard
import React from 'react'
import styles from './CoursesBlock.module.scss'
import Container from '../../../Common/Container/Container'
import CourseCard from '../../../Common/CourseCard/CourseCard'
import { useSelector } from 'react-redux'
import Loader from '../../../Common/Loading/Loader'

const CoursesBlock = () => {

  const courses = useSelector(state => state.courses.courses)
  const isLoadingCourses = useSelector(state => state.courses.isLoadingCourses)

  return (
    <div className={styles.coursesBlock}>
      <Container className={styles.container}>
        <h2 className={styles.title}>
          Courses:
        </h2>
        {isLoadingCourses && <Loader text="Courses is loading!" />}
        {!isLoadingCourses &&
          <div className={styles.cards}>
            {courses.map((item, index) => (
              <CourseCard
                key={index}
                courseNumber={index}
                courseID={item.courseID}
                courseName={item.courseName}
                courseDescription={item.courseDescription}
                courseImage={item.courseImage}
              />
            ))}
          </div>
        }
      </Container>
    </div>
  )
}

export default CoursesBlock
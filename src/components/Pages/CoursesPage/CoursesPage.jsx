import React from 'react'
import styles from './CoursesPage.module.scss'
import CourseCard from '../../Common/CourseCard/CourseCard'
import Container from '../../Common/Container/Container'
import { useSelector } from 'react-redux'
import Button from '../../UI/Button/Button'
import Loader from '../../Common/Loading/Loader'

const CoursesPage = () => {

  const courses = useSelector(state => state.courses.courses)
  const isLoadingCourses = useSelector(state => state.courses.isLoadingCourses)

  return (
    <div>
      <Container className={styles.container}>
        <div className={styles.header}>
          <div className={styles.title}>Список курсов</div>
        </div>
        {isLoadingCourses && <Loader text="Courses is loading!"/>}
        {!isLoadingCourses &&
          <div className={styles.courses}>
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

export default CoursesPage
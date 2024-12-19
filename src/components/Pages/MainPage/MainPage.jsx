import React from 'react'
import styles from './MainPage.module.scss'
import MainBlock from './MainBlock/MainBlock'
import CoursesBlock from './CoursesBlock/CoursesBlock'
import AboutBlock from './AboutBlock/AboutBlock'

const MainPage = () => {

  return (
    <div className={styles.mainPage}>
      <MainBlock className={styles.mainBlock}/>
      <CoursesBlock/>
      <AboutBlock/>
    </div>
  )
}

export default MainPage
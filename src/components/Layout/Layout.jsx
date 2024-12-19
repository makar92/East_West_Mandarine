import React, { useEffect } from 'react'
import styles from './Layout.module.scss'
import Header from './Header/Header'
import MainContent from './MainContent/MainContent'
import Footer from './Footer/Footer'
import { 
  useCourseList, 
  useData, 
} from '../../utils/firebaseFunctions'

const Layout = () => {

  const { getCourseList, isLoadingCourses } = useCourseList();
  const { getData, isLoadingData} = useData()
  
  useEffect(() => {
    getData()
  }, [])

  useEffect(() => {
    getCourseList()
  }, []);

  return (
    <div className={styles.layout}>
      <Header/>
      <MainContent className={styles.mainContent}/>
      <Footer/>
    </div>
  )
}

export default Layout
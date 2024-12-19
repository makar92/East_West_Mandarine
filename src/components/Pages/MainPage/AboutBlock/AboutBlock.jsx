import React from 'react'
import styles from './AboutBlock.module.scss'
import Container from '../../../Common/Container/Container'
import Button from '../../../UI/Button/Button'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { ABOUT_PAGE_ROUTE } from '../../../../routs'

const AboutBlock = () => {

  const aboutMeBlockData = useSelector(state => state.data.data.aboutMeBlock)

  return (
    <div className={styles.aboutBlock}>
      <Container className={styles.container}>
        <div className={styles.image}>
          <img src={aboutMeBlockData.image} alt="photo" />
        </div>
        <div className={styles.content}>
          <h2 className={styles.title}>About Me</h2>
          <div className={styles.text}>{aboutMeBlockData.text}</div>
          <div className={styles.footer}>
          <NavLink to={ABOUT_PAGE_ROUTE}><Button text="Learn More" /></NavLink>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default AboutBlock
import React from 'react'
import styles from './Header.module.scss'
import Container from '../../Common/Container/Container'
import { NavLink } from 'react-router-dom'
import { ABOUT_PAGE_ROUTE, CONTACT_PAGE_ROUTE, COURSES_PAGE_ROUTE, MAIN_PAGE_ROUTE } from '../../../routs'
import Logo from '../../UI/Logo/Logo'
import UserWidget from './UserWidget/UserWidget'

const Header = () => {
  
  return (
    <div className={styles.header}>
      <Container className={styles.container}>
        <NavLink to={MAIN_PAGE_ROUTE}>
          <Logo />
        </NavLink>
        <ul className={styles.nuv}>
          <li><NavLink to={MAIN_PAGE_ROUTE}>Main</NavLink></li>
          <li><NavLink to={COURSES_PAGE_ROUTE}>Courses</NavLink></li>
          <li><NavLink to={ABOUT_PAGE_ROUTE}>About</NavLink></li>
          <li><NavLink to={CONTACT_PAGE_ROUTE}>Contact</NavLink></li>
        </ul>
        <div className={styles.rightBlock}>
          <UserWidget/>
        </div>
      </Container>
    </div>
  )
}

export default Header 
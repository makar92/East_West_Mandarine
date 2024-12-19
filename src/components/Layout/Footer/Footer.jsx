import React from 'react'
import styles from './Footer.module.scss'
import { NavLink } from 'react-router-dom'
import Logo from '../../UI/Logo/Logo'
import { MAIN_PAGE_ROUTE } from '../../../routs'
import Container from '../../Common/Container/Container'
import { useSelector } from 'react-redux'
import SocialIconComponent from '../../UI/SocialIconComponent/SocialIconComponent'

const Footer = () => {

  const text = useSelector(state => state.data.data.main.footerText)
  const socials = useSelector(state => state.data.data.socials.socialList)

  return (
    <div className={styles.footer}>
      <Container className={styles.container}>
      <NavLink to={MAIN_PAGE_ROUTE}><Logo/></NavLink>
      <div className={styles.text}>{text}</div>
      <div className={styles.socials}>
        {socials.map((item, index) => (
          <a key={index} href={item.link}>
            <SocialIconComponent type={item.type} className={styles.social}/>
          </a>
        ))}
      </div>
      </Container>
    </div>
  )
}

export default Footer
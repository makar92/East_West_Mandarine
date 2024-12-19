import React from 'react'
import styles from './Logo.module.scss'
import { useSelector } from 'react-redux'

const Logo = () => {

  const text = useSelector(state => state.data.data.main.mainLogo)

  return (
    <div className={styles.logo}>{text}</div>
  )
}

export default Logo
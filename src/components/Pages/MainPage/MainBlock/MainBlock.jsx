import React from 'react'
import styles from './MainBlock.module.scss'
import Container from '../../../Common/Container/Container'
import { FiCheck } from 'react-icons/fi'
import { useSelector } from 'react-redux'

const MainBlock = ({ className }) => {

  const mainBlockData = useSelector(state => state.data.data.mainBlock)

  return (
    <div className={styles.mainBlock + " " + className}>
      <Container className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.title}>{mainBlockData.text}</h1>
          <ul className={styles.list}>
            {mainBlockData.list !== undefined &&
              mainBlockData.list.map((item, index) => (
                <li key={index}><FiCheck />{item}</li>
              ))}
          </ul>
        </div>
      </Container>
      <div className={styles.bg}>
        <div className={styles.image}>
          <Container>
            <img src={mainBlockData.image} alt="girl" />
          </Container>
        </div>
        <div className={styles.bgColor}></div>
        <div className={styles.bgImage}>
          <img src={mainBlockData.BG} alt="bg" />
        </div>
      </div>

    </div>
  )
}

export default MainBlock
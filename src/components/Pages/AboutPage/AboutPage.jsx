import React from 'react'
import styles from './AboutPage.module.scss'
import Container from '../../Common/Container/Container'
import YouTubePlayer from '../../Common/Content/YouTubePlayer/YouTubePlayer'
import { useSelector } from 'react-redux'

const AboutPage = () => {

  const aboutPageData = useSelector(state => state.data.data.aboutPage)

  return (
    <div>
      <Container className={styles.container}>
        <div className={styles.header}>
          <div className={styles.title}>About Us</div>
        </div>
        <div className={styles.blocks}>
          {aboutPageData.blocks.map((item, index) => (<div className={styles.block} key={index}>
            <img className={styles.image} src={item.image} alt="img" />
            <div className={styles.text}>
              <div dangerouslySetInnerHTML={{ __html: item.text }}u8/>
            </div>
          </div>))}
        </div>
        <YouTubePlayer
          className={styles.youTubePlayer}
          link={aboutPageData.youTubeVideo}
        />
        <div className={styles.textBlock}>
          <div dangerouslySetInnerHTML={{ __html: aboutPageData.text }} />
        </div>
      </Container>
    </div>
  )
}

export default AboutPage
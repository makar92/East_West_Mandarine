import React from 'react';
import styles from './VideoPlayer.module.scss'

const VideoPlayer = ({ content }) => {

  return (
    <div>
      <video
        className={styles.videoPlayer}
        controls
        controlsList="nodownload"
      >
        <source
          src={content ? content.link : ""}
          type="video/mp4"
        />
        Ваш браузер не поддерживает тег video.
      </video>
    </div>
  );
}

export default VideoPlayer;



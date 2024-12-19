import React from 'react';
import styles from './AudioPlayer.module.scss';

const AudioPlayer = ({content}) => {

  return (
      <audio
        className={styles.audio}
        controls
        controlsList="nodownload"
      >
        <source
          src={content ? content.link : ""}
          type="audio/mpeg"
        />
          Ваш браузер не поддерживает элемент audio.
      </audio>
  );
};

export default AudioPlayer;


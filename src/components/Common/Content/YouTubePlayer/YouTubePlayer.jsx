import React from 'react';
import styles from './YouTubePlayer.module.scss'
import YouTube from 'react-youtube';

const YouTubePlayer = ({ link, ...props }) => {

  const extractVideoId = (url = "") => {

    console.log(url)

    const match = url.match(
      /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/
    );
    return match ? match[1] : null;
  };



  const videoId = extractVideoId(link);

  if (!videoId) {
    return <div>Invalid YouTube URL</div>;
  }

  const onPlayerReady = (event) => {
    // console.log(content)
  };

  const onPlayerError = (event) => {
    console.error('Error occurred in the player:', event.data);
  };

  const opts = {
    //height: '390',
    //width: '640',
    playerVars: {
      autoplay: 0, // Включить автоматическое воспроизведение
      controls: 1, // Показать элементы управления
      rel: 0,      // Отключить рекомендации
      modestbranding: 1,     // убирает логотип YouTube
    },
  };

  return (
    <div className={styles.youTubePlayer} {...props}>
      <YouTube
        videoId={videoId}
        opts={opts}
        onReady={onPlayerReady}
        onError={onPlayerError}
      />
    </div>
  );
}

export default YouTubePlayer;



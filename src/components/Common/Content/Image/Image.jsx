import React, { useState, useEffect } from 'react';
import styles from './Image.module.scss';

const Image = ({ content }) => {
   
  const [maxWidth, setMaxWidth] = useState(content ? content.size : 100)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 767px)');
    const handleMediaQueryChange = (e) => {
      setMaxWidth(e.matches ? null : maxWidth);  // Устанавливаем null для maxWidth на маленьких экранах
    };

    mediaQuery.addListener(handleMediaQueryChange);
    handleMediaQueryChange(mediaQuery); // Устанавливаем начальное значение

    return () => mediaQuery.removeListener(handleMediaQueryChange); // Чистим слушатель при размонтировании
  }, []);


  return (
    <div className={styles.image} style={{ maxWidth: maxWidth !== null ? `${maxWidth}%` : 'none' }}>
      <img src={content ? content.link : ""} alt="image_content" />
    </div>
  );
};

export default Image;

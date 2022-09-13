import React, { useRef, useState, useEffect } from 'react';
import styles from './ClientItem.module.css';

import Flippy, { FrontSide, BackSide } from 'react-flippy';

export const ClientItem = (props) => {
  const { frontImg, time, backImg } = props;
  const ref = useRef();
  const [isFlipped, setIsFlipped] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsFlipped(!isFlipped);
    }, time);
    return () => clearInterval(interval);
  }, [isFlipped]);
  return (
      <Flippy flipDirection="vertical" ref={ref} isFlipped={!isFlipped} className={styles.flippyBody}>
        <FrontSide className={styles.flypFront}>
          <div>{frontImg}</div>
        </FrontSide>
        <BackSide className={styles.flypBack}>
          <div>{backImg}</div>
        </BackSide>
      </Flippy>
  );
};

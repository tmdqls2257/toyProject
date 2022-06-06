import React, { useEffect, useRef, useState } from 'react';
import styles from '../styles/css/slider.module.css';

const Slider = () => {
  const [index, setIndex] = useState(0);
  const timeoutRef: { current: NodeJS.Timeout | null } = useRef(null);
  const colors = ['#0088FE', '#00C49F', '#FFBB28', '#3d3c3b'];
  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === colors.length - 1 ? 0 : prevIndex + 1,
        ),
      3000,
    );

    return () => {
      resetTimeout();
    };
  }, [index]);
  return (
    <section className={styles.slideshow}>
      <div
        className={styles.slideshowSlider}
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >
        {colors.map((backgroundColor, index) => (
          <div
            className={styles.slide}
            key={index}
            style={{ backgroundColor }}
          ></div>
        ))}
      </div>

      <div className={styles.slideshowDots}>
        {colors.map((_, idx) => (
          <div
            key={idx}
            className={
              index === idx ? styles.slideshowDotActive : styles.slideshowDot
            }
            onClick={() => {
              setIndex(idx);
            }}
          ></div>
        ))}
      </div>
    </section>
  );
};

export default Slider;

import { useRef, useState } from 'react';

import classes from './HeroCarousel.module.css';
import { postersArr } from '../../HelperConsts';

const HeroCarousel = () => {
  const heroRef = useRef();
  const [currentIndex, setCurrentIndex] = useState(0);

  const changePoster = value => {
    if (value < 0) return setCurrentIndex(postersArr.length - 1);
    if (value > postersArr.length - 1) return setCurrentIndex(0);

    setCurrentIndex(value);
  };

  const renderPosters = postersArr.map(poster => {
    return (
      <div key={poster.id} className={classes.poster}>
        <picture>
          <source media="(max-width: 500px)" srcSet={poster.mobilePoster} />
          <source media="(min-width: 501px)" srcSet={poster.desktopPoster} />
          <img
            width="320"
            height="90"
            src={poster.desktopPoster}
            alt={poster.alt}
          />
        </picture>
      </div>
    );
  });

  const renderPagination = postersArr.map((_, i) => {
    return (
      <div
        key={i}
        className={currentIndex === i ? classes.currentPoster : ''}
        onClick={changePoster.bind(null, i)}
      ></div>
    );
  });

  return (
    <section className={classes.wrapper}>
      <div
        ref={heroRef}
        className={classes.postersWrapper}
        style={{ transform: `translateX(-${currentIndex * 100}vw)` }}
      >
        {renderPosters}
      </div>
      <div className={classes.iconsWrapper}>
        <svg
          onClick={changePoster.bind(null, currentIndex - 1)}
          width="21"
          height="76"
          viewBox="0 0 21 76"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M19.7856 76L20.7144 74.1913L2.14258 38L20.7144 1.80873L19.7856 0L0.285595 38L19.7856 76Z"
            fill="#00F4E1"
          />
        </svg>

        <svg
          onClick={changePoster.bind(null, currentIndex + 1)}
          width="21"
          height="76"
          viewBox="0 0 21 76"
          fill="none"
        >
          <path
            d="M1.2144 0L0.285583 1.80873L18.8574 38L0.285583 74.1913L1.2144 76L20.7144 38L1.2144 0Z"
            fill="#00F4E1"
          />
        </svg>
      </div>
      <div className={classes.paginationWrapper}>
        <div className={classes.pagination}>{renderPagination}</div>
      </div>
    </section>
  );
};

export default HeroCarousel;

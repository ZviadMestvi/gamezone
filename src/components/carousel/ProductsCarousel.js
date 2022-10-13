import { useState } from 'react';
import { testProducts } from '../../HelperConsts';

import classes from './ProductsCarousel.module.css';
import DefaultProduct from '../products/DefaultProduct/DefaultProduct';
import rightCarouselArrow from '../../assets/rightCarouselArrow.svg';

const ProductsCarousel = props => {
  const [carouselIndex, setCarouselIndex] = useState(0);

  const prevBtnHandler = () => {
    if (carouselIndex === 0) return;
    setCarouselIndex(prevState => --prevState);
  };

  const nextBtnHandler = () => {
    if (carouselIndex === testProducts.length - 6) return;
    setCarouselIndex(prevState => ++prevState);
  };

  const renderProducts = testProducts.map(product => {
    return <DefaultProduct key={product.id} data={product} loading="lazy" />;
  });

  return (
    <div className={classes.wrapper}>
      <h2 onClick={() => (window.location.href = 'categories')}>
        {props.title}
      </h2>
      <div className={classes.carouselWrapper}>
        <button
          onClick={prevBtnHandler}
          className={`${classes.navBtn} ${classes.prevBtn}`}
        >
          <img src={rightCarouselArrow} alt="left arrow" />
        </button>
        <div className={classes.productsWrapper}>
          <div
            className={classes.products}
            style={{ transform: `translateX(-${242 * carouselIndex}px)` }}
          >
            {renderProducts}
          </div>
        </div>
        <button
          onClick={nextBtnHandler}
          className={`${classes.navBtn} ${classes.nextBtn}`}
        >
          <img src={rightCarouselArrow} alt="right arrow" />
        </button>
      </div>
    </div>
  );
};

export default ProductsCarousel;

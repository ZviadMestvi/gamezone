import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import classes from './ProductsCarousel.module.css';
import products from '../../data/Products.json';
import DefaultProduct from '../products/DefaultProduct/DefaultProduct';
import rightCarouselArrow from '../../assets/rightCarouselArrow.svg';

const ProductsCarousel = props => {
  const navigate = useNavigate();
  const [carouselIndex, setCarouselIndex] = useState(0);

  const navigateTo = () => {
    navigate('/categories', {
      state: {
        title: props.title,
      },
    });
  };

  const prevBtnHandler = () => {
    if (carouselIndex === 0) return;
    setCarouselIndex(prevState => --prevState);
  };

  const nextBtnHandler = () => {
    if (carouselIndex === products.length - 6) return;
    setCarouselIndex(prevState => ++prevState);
  };

  const renderProducts = products.map(product => {
    return <DefaultProduct key={product.id} data={product} loading="lazy" />;
  });

  return (
    <div className={classes.wrapper}>
      <h2 onClick={navigateTo}>{props.title}</h2>
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

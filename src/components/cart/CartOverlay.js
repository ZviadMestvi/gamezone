import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import classes from './CartOverlay.module.css';
import CartOverlayProduct from '../products/CartOverlayProduct/CartOverlayProduct';

const CartOverlay = () => {
  const navigate = useNavigate();
  const { cartProducts } = useSelector(state => state.main);
  const [overlayVis, setOverlayVis] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalQuantity, setTotalQuantity] = useState(0);
  const navigateToCart = () => {
    navigate('/cart');
  };

  const calcPriceAndQuantity = () => {
    let priceSum = 0;
    let quantitySum = 0;
    cartProducts.forEach(product => {
      priceSum += product.price * product.quantity;
      quantitySum += product.quantity;
    });

    setTotalPrice(priceSum);
    setTotalQuantity(quantitySum);
  };

  useEffect(() => {
    calcPriceAndQuantity();
  }, [cartProducts]); // eslint-disable-line

  const renderProducts =
    cartProducts.length !== 0 ? (
      cartProducts.map(product => {
        return <CartOverlayProduct key={product.id} data={product} />;
      })
    ) : (
      <p className={classes.noResults}>Cart is empty.</p>
    );

  return (
    <div className={classes.wrapper}>
      <div
        className={classes.cartIconWrapper}
        onClick={() => setOverlayVis(!overlayVis)}
      >
        <div className={classes.cartIcon}>
          <span>{totalQuantity}</span>
          <svg width="31" height="31" viewBox="0 0 31 31">
            <g clipPath="url(#clip0_84_6)">
              <path
                d="M26.1714 4.33882L22.2226 8.28824H0.666626L4.78702 14.3556L4.78598 14.3566L8.43972 19.7061H18.7211L17.6629 23.1469H9.30189V23.1635C8.17187 23.2502 7.27503 24.1881 7.27503 25.3411C7.27503 26.5516 8.25967 27.5362 9.47078 27.5362C10.6803 27.5362 11.6649 26.5516 11.6649 25.3411C11.6649 24.906 11.5334 24.5008 11.314 24.1588H14.9779C14.758 24.5008 14.627 24.9055 14.627 25.3411C14.627 26.5516 15.6116 27.5362 16.8228 27.5362C18.0322 27.5362 19.0169 26.5516 19.0169 25.3411C19.0169 24.7979 18.8118 24.3063 18.4839 23.9224L23.133 8.81024L26.5903 5.35292H30.6669V4.33942H26.1717V4.33882H26.1714ZM8.97378 18.692L6.24991 14.7033H17.0095V13.691H5.56021L2.57906 9.30011H21.9217L19.0316 18.6922C19.0316 18.692 8.97378 18.692 8.97378 18.692ZM10.6518 25.3405C10.6518 25.9924 10.122 26.5221 9.47064 26.5221C8.81872 26.5221 8.28898 25.9922 8.28898 25.3405C8.28898 24.6892 8.81887 24.1582 9.47064 24.1582C10.122 24.1587 10.6518 24.6896 10.6518 25.3405ZM16.8226 26.5221C16.1703 26.5221 15.641 25.9922 15.641 25.3405C15.641 24.6892 16.1708 24.1582 16.8226 24.1582C17.4745 24.1582 18.0049 24.6892 18.0049 25.3405C18.0049 25.9922 17.4744 26.5221 16.8226 26.5221Z"
                fill="white"
              />
            </g>
            <defs>
              <clipPath id="clip0_84_6">
                <rect
                  width="30"
                  height="30"
                  fill="white"
                  transform="translate(0.666626 0.937454)"
                />
              </clipPath>
            </defs>
          </svg>
        </div>
      </div>

      <div
        className={`${classes.overlayWrapper} ${
          overlayVis ? classes.displayOverlay : ''
        }`}
      >
        <div className={classes.totalWrapper}>
          <p>
            Total:{' '}
            <span>
              {totalPrice === 0 ? totalPrice : totalPrice.toFixed(2)} ₾
            </span>
          </p>
          <p>{cartProducts.length} Items</p>
        </div>

        <div className={classes.productsWrapper}>{renderProducts}</div>

        <div className={classes.viewCartBtn}>
          <button onClick={navigateToCart}>View Cart</button>
        </div>
      </div>
    </div>
  );
};

export default CartOverlay;

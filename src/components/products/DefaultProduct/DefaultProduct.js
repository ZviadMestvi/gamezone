import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addToCart } from '../../../store/mainSlice';

import classes from './DefaultProduct.module.css';
import bf2042CoverMobile from '../../../assets/productsAssets/bf2042-cover.webp';
import compareIcon from '../../../assets/barChart.svg';
import wishlistIcon from '../../../assets/heartIcon.svg';
import cartIcon from '../../../assets/shoppingCartIcon.svg';

const DefaultProduct = props => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const navigateToProduct = () => {
    navigate(
      `/products/${props.data.category}/${props.data.subcategory}/${props.data.name}`
    );
  };

  const addProductToCart = () => {
    dispatch(
      addToCart({
        data: props.data,
        quantity: 1,
      })
    );
  };

  return (
    <div
      className={`${classes.wrapper} ${props.grid ? classes.gridWrapper : ''}`}
    >
      {props.data.onSale && (
        <div className={classes.saleSign}>
          <p>
            <b>SALE</b>
          </p>
        </div>
      )}
      <div className={classes.coverWrapper}>
        <img
          width="208"
          height="182"
          id={classes.cover}
          src={bf2042CoverMobile}
          alt={props.data.name}
          onClick={navigateToProduct}
        />
        <button className={classes.viewBtn}>
          <img width="15" heigth="15" src={compareIcon} alt="compare icon" />
        </button>
        <button id={classes.wishlistBtn} className={classes.viewBtn}>
          <img width="15" heigth="15" src={wishlistIcon} alt="wishlist icon" />
        </button>
      </div>
      <div
        className={`${classes.productInfo} ${
          props.grid ? classes.gridProductInfo : ''
        }`}
      >
        <div className={classes.titleWrapper}>
          <h1 className={classes.title}>{props.data.name}</h1>
        </div>

        <div className={classes.priceWrapper}>
          {props.data.onSale && (
            <p className={classes.onsalePrice}>
              You save {(props.data.price - props.data.salePrice).toFixed(2)} ₾
            </p>
          )}

          <p className={classes.price}>
            <b>
              {props.data.onSale
                ? props.data.salePrice?.toFixed(2)
                : props.data.price.toFixed(2)}{' '}
              ₾
            </b>
            {props.data.onSale && <span>{props.data.price.toFixed(2)} ₾</span>}
          </p>
        </div>

        <div className={classes.btnsWrapper}>
          <button className={classes.buyBtn} onClick={navigateToProduct}>
            Buy
          </button>
          <button className={classes.addToCartBtn} onClick={addProductToCart}>
            <img src={cartIcon} alt="cart icon" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default DefaultProduct;

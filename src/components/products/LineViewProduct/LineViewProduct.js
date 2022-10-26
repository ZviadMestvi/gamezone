import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addToCart } from '../../../store/mainSlice';

import classes from './LineViewProduct.module.css';
import productCover from '../../../assets/productsAssets/bf2042-cover.webp';
import barChartIcon from '../../../assets/barChart.svg';
import heartIcon from '../../../assets/heartIcon.svg';
import cartIcon from '../../../assets/shoppingCartIcon.svg';

const LineViewProduct = props => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
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
    <div className={classes.wrapper}>
      {props.data.onSale && (
        <div className={classes.saleSign}>
          <p>
            <b>SALE</b>
          </p>
        </div>
      )}

      <div className={classes.coverWrapper}>
        <img
          width="52"
          height="45"
          src={productCover}
          alt={props.data.name}
          onClick={navigateToProduct}
        />
        <h1>{props.data.name}</h1>
      </div>

      <div className={classes.productInfo}>
        <div className={classes.priceWrapper}>
          {props.data.onSale && (
            <p className={classes.nonSalePrice}>
              {props.data.price.toFixed(2)} ₾
            </p>
          )}
          <p className={classes.price}>
            <b>
              {props.data.onSale
                ? props.data.salePrice?.toFixed(2)
                : props.data.price.toFixed(2)}{' '}
              ₾
            </b>
          </p>
        </div>

        <div className={classes.option}>
          <img src={heartIcon} alt="wishlist icon" />
        </div>

        <div className={classes.option}>
          <img src={barChartIcon} alt="compare icon" />
        </div>

        <div className={classes.btnsWrapper}>
          <button className={classes.buyBtn}>Buy</button>
          <button className={classes.addToCartBtn} onClick={addProductToCart}>
            <img src={cartIcon} alt="cart icon" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default LineViewProduct;

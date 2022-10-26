import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addToCart } from '../../../store/mainSlice';

import classes from './ListViewProduct.module.css';
import productCover from '../../../assets/productsAssets/bf2042-cover.webp';
import barChartIcon from '../../../assets/barChart.svg';
import heartIcon from '../../../assets/heartIcon.svg';
import cartIcon from '../../../assets/shoppingCartIcon.svg';

const ListViewProduct = props => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [qty, setQty] = useState(1);
  const navigateToProduct = () => {
    navigate(
      `/products/${props.data.category}/${props.data.subcategory}/${props.data.name}`
    );
  };

  const addProductToCart = () => {
    const qtyInt = parseInt(qty);
    if (qtyInt < 1 || qtyInt > 99 || isNaN(qtyInt)) return;

    dispatch(
      addToCart({
        data: props.data,
        quantity: qtyInt,
      })
    );
  };

  const changeQuantity = e => {
    setQty(e.target.value);
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
          width="140"
          height="122"
          src={productCover}
          alt={props.data.name}
          onClick={navigateToProduct}
        />
        <h1>{props.data.name}</h1>
      </div>

      <div className={classes.productInfo}>
        {props.data.onSale ? (
          <p className={classes.onSalePrice}>
            You save {(props.data.price - props.data.salePrice).toFixed(2)} ₾
          </p>
        ) : (
          <p className={classes.inStock}>In stock</p>
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
        <label htmlFor={`quantity${props.data.id}`}>Quantity: </label>
        <input
          id={`quantity${props.data.id}`}
          name="quantity"
          type="number"
          autoComplete="off"
          defaultValue="1"
          onChange={changeQuantity}
        ></input>
        <div className={classes.btnsWrapper}>
          <button className={classes.buyBtn}>Buy</button>
          <button className={classes.addToCartBtn} onClick={addProductToCart}>
            <img src={cartIcon} alt="cart icon" />
          </button>
        </div>
        <div className={classes.option}>
          <img src={heartIcon} alt="wishlist icon" />

          <p>Add to wishlist</p>
        </div>
        <div className={classes.option}>
          <img src={barChartIcon} alt="compare icon" />

          <p>Compare</p>
        </div>
      </div>
    </div>
  );
};

export default ListViewProduct;

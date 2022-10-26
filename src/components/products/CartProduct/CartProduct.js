import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
  decrementQuantity,
  deleteCartItem,
  incrementQuantity,
  changeQuantity,
} from '../../../store/mainSlice';

import classes from './CartProduct.module.css';
import mwCover from '../../../assets/productsAssets/cod-mw2019/cod-mwCover.webp';

const CartProduct = props => {
  const qtyRef = useRef();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const navigateToProduct = () => {
    navigate(
      `/products/${props.data.category}/${props.data.subcategory}/${props.data.name}`
    );
  };

  const decrementQty = () => {
    qtyRef.current.value--;
    dispatch(decrementQuantity(props.data.id));
  };

  const incrementQty = () => {
    qtyRef.current.value++;
    dispatch(incrementQuantity(props.data.id));
  };

  const changeQty = e => {
    dispatch(changeQuantity({ id: props.data.id, qty: e.target.value }));
  };

  return (
    <div className={classes.wrapper}>
      <div className={classes.titleWrapper}>
        <button
          className={classes.deleteBtn}
          onClick={() => dispatch(deleteCartItem(props.data.id))}
        >
          X
        </button>
        <img
          width="95"
          height="83"
          src={mwCover}
          alt={props.data.name}
          onClick={navigateToProduct}
        />
        <p className={classes.title}>{props.data.name}</p>
      </div>
      <div className={classes.priceWrapper}>
        <div className={classes.quantityWrapper}>
          <button className={classes.minusBtn} onClick={decrementQty}>
            -
          </button>
          <label htmlFor="quantity"></label>
          <input
            ref={qtyRef}
            id="quantity"
            name="quantity"
            type="number"
            autoComplete="off"
            min="1"
            max="99"
            value={props.data.quantity}
            onChange={changeQty}
          ></input>
          <button className={classes.plusBtn} onClick={incrementQty}>
            +
          </button>
        </div>
        <p className={classes.price}>{props.data.price.toFixed(2)} ₾</p>
        <p className={classes.totalPrice}>
          {(props.data.price * props.data.quantity).toFixed(2)} ₾
        </p>
      </div>
    </div>
  );
};

export default CartProduct;

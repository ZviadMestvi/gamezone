import { useDispatch } from 'react-redux';
import {
  deleteCartItem,
  incrementQuantity,
  decrementQuantity,
} from '../../../store/mainSlice';

import classes from './CartOverlayProduct.module.css';
import productCover from '../../../assets/productsAssets/bf2042-cover.webp';
import incrementIcon from '../../../assets/incrementItemIcon.svg';
import xIcon from '../../../assets/deleteIcon.svg';

const CartOverlayProduct = props => {
  const dispatch = useDispatch();

  return (
    <div className={classes.wrapper}>
      <div className={classes.coverWrapper}>
        <img width="90" height="79" src={productCover} alt={props.data.name} />
      </div>

      <div className={classes.productInfo}>
        <p>{props.data.name}</p>
        <p>
          <b>
            {props.data.price.toFixed(2)} ₾ x {props.data.quantity}
          </b>
        </p>
      </div>

      <div className={classes.btnsWrapper}>
        <button onClick={() => dispatch(incrementQuantity(props.data.id))}>
          <img width="10" height="10" src={incrementIcon} alt="arrow up icon" />
        </button>
        <button onClick={() => dispatch(deleteCartItem(props.data.id))}>
          <img id={classes.xIcon} src={xIcon} alt="remove item icon" />
        </button>
        <button onClick={() => dispatch(decrementQuantity(props.data.id))}>
          <img
            width="10"
            height="10"
            src={incrementIcon}
            alt="arrow down icon"
          />
        </button>
      </div>
    </div>
  );
};

export default CartOverlayProduct;

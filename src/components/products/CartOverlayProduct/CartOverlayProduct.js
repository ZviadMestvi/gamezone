import classes from './CartOverlayProduct.module.css';
import productCover from '../../../assets/bf2042-cover.webp';
import incrementIcon from '../../../assets/incrementItemIcon.svg';
import xIcon from '../../../assets/xIcon.svg';

const CartOverlayProduct = () => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.coverWrapper}>
        <img width="90" height="79" src={productCover} alt="battlefield 5" />
      </div>

      <div className={classes.productInfo}>
        <p>XBOX Sekiro: Shadows Die Twice </p>
        <p>
          <b>20.00 ₾ x 2</b>
        </p>
      </div>

      <div className={classes.btnsWrapper}>
        <button>
          <img width="10" height="10" src={incrementIcon} alt="arrow up icon" />
        </button>
        <button>
          <img id={classes.xIcon} src={xIcon} alt="remove item icon" />
        </button>
        <button>
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

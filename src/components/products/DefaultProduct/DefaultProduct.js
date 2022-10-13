import classes from './DefaultProduct.module.css';
import bf2042CoverMobile from '../../../assets/mobile-pics/bf2042-cover-mobile.webp';
import cartIcon from '../../../assets/shoppingCartIcon.svg';
import eyeIcon from '../../../assets/eyeIcon.svg';

const DefaultProduct = props => {
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
          width="147"
          height="179"
          id={classes.cover}
          src={bf2042CoverMobile}
          alt="battlefield 5 cover"
          onClick={() => (window.location.href = 'game')}
        />
        <button className={classes.viewBtn}>
          <img src={eyeIcon} alt="eye icon" />
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
          <button className={classes.buyBtn}>Buy</button>
          <button className={classes.addToCartBtn}>
            <img src={cartIcon} alt="cart icon" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default DefaultProduct;

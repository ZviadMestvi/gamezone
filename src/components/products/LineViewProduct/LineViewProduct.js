import classes from './LineViewProduct.module.css';
import productCover from '../../../assets/bf2042-cover.webp';
import cartIcon from '../../../assets/shoppingCartIcon.svg';

const LineViewProduct = props => {
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
        <img src={productCover} alt={props.data.name} />
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
          <svg viewBox="0 0 9 9">
            <g clipPath="url(#clip0_300_214)">
              <path
                d="M9 3.35656C9 4.46295 8.39078 5.36603 7.13748 6.1175C5.55616 7.06564 4.77931 8.20706 4.77164 8.21848C4.71088 8.30904 4.60898 8.36334 4.49998 8.36334C4.39106 8.36334 4.2893 8.30912 4.22854 8.21879C4.21667 8.20121 3.43106 7.05796 1.86252 6.1175C0.609224 5.36603 0 4.4629 0 3.35656C0 2.03805 0.859334 0.636749 2.45186 0.636749C3.51864 0.636749 4.16529 1.1091 4.50002 1.46293C4.83475 1.10905 5.4814 0.636749 6.54819 0.636749C8.14071 0.636706 9 2.03805 9 3.35656Z"
                fill="#EEEEEE"
              />
            </g>
            <defs>
              <clipPath id="clip0_300_214">
                <rect width="9" height="9" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>

        <div className={classes.option}>
          <svg viewBox="0 0 9 9">
            <g clipPath="url(#clip0_299_44)">
              <path d="M2.16367 2.97919H0V9H2.16367V2.97919Z" fill="#EEEEEE" />
              <path d="M5.58555 0H3.42188V9H5.58555V0Z" fill="#EEEEEE" />
              <path
                d="M9.0001 1.51349H6.83643V9.00002H9.0001V1.51349Z"
                fill="#EEEEEE"
              />
            </g>
            <defs>
              <clipPath id="clip0_299_44">
                <rect width="9" height="9" fill="white" />
              </clipPath>
            </defs>
          </svg>
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

export default LineViewProduct;

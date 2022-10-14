import classes from './ListViewProduct.module.css';
import productCover from '../../../assets/bf2042-cover.webp';
import barChartIcon from '../../../assets/bar-chart.svg';
import heartIcon from '../../../assets/heart-icon.svg';
import cartIcon from '../../../assets/shoppingCartIcon.svg';

const ListViewProduct = props => {
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
        <label htmlFor="quantity">Quantity: </label>
        <input
          id="quantity"
          name="quantity"
          type="number"
          autoComplete="off"
          defaultValue="1"
        ></input>
        <div className={classes.btnsWrapper}>
          <button className={classes.buyBtn}>Buy</button>
          <button className={classes.addToCartBtn}>
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

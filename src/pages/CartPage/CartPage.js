import { Fragment, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clearCart } from '../../store/mainSlice';

import classes from './CartPage.module.css';
import Header from '../../components/header/Header';
import CartProduct from '../../components/products/CartProduct/CartProduct';
import Footer from '../../components/footer/Footer';

const CartPage = () => {
  const dispatch = useDispatch();
  const { cartProducts } = useSelector(state => state.main);
  const [totalPrice, setTotalPrice] = useState(0);

  const countTotal = () => {
    let sum = 0;
    cartProducts.forEach(product => {
      sum += product.price * product.quantity;
    });

    setTotalPrice(sum);
  };

  useEffect(() => {
    countTotal();
  }, [cartProducts]); // eslint-disable-line

  const renderProducts =
    cartProducts.length !== 0 ? (
      cartProducts.map(product => {
        return <CartProduct key={product.id} data={product} />;
      })
    ) : (
      <p className={classes.noResults}>Cart is empty.</p>
    );

  return (
    <Fragment>
      <Header />
      <main className={classes.main}>
        <h1 className={classes.mainTitle}>Cart</h1>
        <div className={classes.sectionsWrapper}>
          <section className={classes.productsSection}>
            <div className={classes.categories}>
              <button
                className={classes.clearBtn}
                onClick={() => dispatch(clearCart())}
              >
                X
              </button>
              <p className={classes.titleCategory}>Title</p>
              <p className={classes.quantityCategory}>Quantity</p>
              <p className={classes.priceCategory}>Price</p>
              <p className={classes.totalCategory}>Total</p>
            </div>
            <div>{renderProducts}</div>
          </section>
          <section className={classes.totalSection}>
            <h2>Total</h2>

            <div>
              <p>Total: {totalPrice.toFixed(2)} ₾</p>
              <button>Buy</button>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </Fragment>
  );
};

export default CartPage;

import { Fragment, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { addToCart } from '../../store/mainSlice';

import classes from './ProductPage.module.css';
import products from '../../data/Products.json';
import mwCover from '../../assets/productsAssets/cod-mw2019/cod-mwCover.webp';
import bfCover from '../../assets/productsAssets/bf2042-cover.webp';
import cartIcon from '../../assets/shoppingCartIcon.svg';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';

const ProductPage = () => {
  const dispatch = useDispatch();
  const { title } = useParams();
  const data = products.find(
    product => product.name.replace(/%20/, ' ') === title
  );
  const [mainImage, setMainImage] = useState(mwCover);
  const [qty, setQty] = useState(1);

  const changeQuantity = e => {
    setQty(e.target.value);
  };

  const addProductToCart = () => {
    const qtyInt = parseInt(qty);
    if (qtyInt < 1 || qtyInt > 99 || isNaN(qtyInt)) return;

    dispatch(
      addToCart({
        data,
        quantity: qtyInt,
      })
    );
  };

  return (
    <Fragment>
      <Header />
      <main className={classes.main}>
        <div>
          <h1 className={classes.productTitle}>{data.name}</h1>
          <h2 className={classes.path}>
            Home / {data.category} / {data.subcategory} / {data.name}
          </h2>
        </div>

        <div className={classes.productWrapper}>
          <section className={classes.mainInfoWrapper}>
            <div className={classes.infoWrapper}>
              <div className={classes.imageWrapper}>
                <div className={classes.allImages}>
                  <ul>
                    <li onClick={() => setMainImage(mwCover)}>
                      <img
                        className={
                          mainImage === mwCover ? classes.activeImage : ''
                        }
                        width="90"
                        height="79"
                        src={mwCover}
                        alt="call of duty: modern warfare cover"
                      />
                    </li>
                    <li onClick={() => setMainImage(bfCover)}>
                      <img
                        className={
                          mainImage === bfCover ? classes.activeImage : ''
                        }
                        width="90"
                        height="79"
                        src={bfCover}
                        alt="call of duty: modern warfare cover"
                      />
                    </li>
                    <li onClick={() => setMainImage(mwCover)}>
                      <img
                        className={
                          mainImage === mwCover ? classes.activeImage : ''
                        }
                        width="90"
                        height="79"
                        src={mwCover}
                        alt="call of duty: modern warfare cover"
                      />
                    </li>
                    <li onClick={() => setMainImage(bfCover)}>
                      <img
                        className={
                          mainImage === bfCover ? classes.activeImage : ''
                        }
                        width="90"
                        height="79"
                        src={bfCover}
                        alt="call of duty: modern warfare cover"
                      />
                    </li>
                    <li onClick={() => setMainImage(mwCover)}>
                      <img
                        className={
                          mainImage === mwCover ? classes.activeImage : ''
                        }
                        width="90"
                        height="79"
                        src={mwCover}
                        alt="call of duty: modern warfare cover"
                      />
                    </li>
                  </ul>
                </div>

                <div className={classes.mainImage}>
                  <img
                    width="460"
                    height="402"
                    src={mainImage}
                    alt="call of duty: modern warfare cover"
                  />
                </div>
              </div>

              <div className={classes.featuresWrapper}>
                <h3>Features:</h3>
                <p>
                  The stakes have never been higher as players take on the role
                  of lethal Tier One Operators in a heart-racing saga that will
                  affect the global balance of power. Developed by the studio
                  that started it all, Infinity Ward delivers an epic
                  reimagining of the iconic Modern Warfare® series from the
                  ground up.
                  <br></br>
                  <br></br>
                  Pre-purchase Call of Duty®: Modern Warfare® II - Vault Edition
                  and instantly get The Ghost Legacy Pack FREE for a limited
                  time. This offer comes with 12 Ghost Operator skins and 10
                  Weapon Blueprints available for immediate use in Modern
                  Warfare® (2019 and Warzone™)*. Offer is available until
                  October 28th, 2022.
                </p>
              </div>
            </div>

            <div className={classes.descWrapper}>
              <h3>Description:</h3>
              <p>
                {`
              Includes:

              - Call of Duty®: Modern Warfare®
              - Warzone™, featuring a Battle Royale mode
              - Battle Pass system*
              - In-game XRK Weapons Pack
              - In-game Tactical Knife

              Experience a visceral Campaign or assemble your team in the ultimate online playground with multiple Special Ops challenges, a mix of Multiplayer maps and modes, and the franchise's premiere Battle Pass system.

              You also get access to Warzone™, the free-to-play experience from Modern Warfare®.

              Developed by the studio that started it all, Infinity Ward delivers an epic reimagining of the iconic series from the ground up.

              Lock in, level up, and join the ranks with the latest edition of Modern Warfare®. Stay frosty.

              Pre-order Call of Duty®: Modern Warfare® II - Vault Edition digitally and instantly get The Ghost Legacy Pack
              `}
              </p>
            </div>
          </section>

          <section className={classes.buyWrapper}>
            <div className={classes.detailsWrapper}>
              {data.inStock ? (
                <p className={classes.inStock}>In Stock</p>
              ) : (
                <p className={classes.outOfStock}>Out of Stock</p>
              )}
              <h4>{data.name}</h4>
              <div className={classes.mobilePrice}>
                {/* <h5>{data.price.toFixed(2)} ₾</h5> */}

                <div className={classes.priceWrapper}>
                  <h5 className={classes.price}>
                    <b>
                      {data.onSale
                        ? data.salePrice?.toFixed(2)
                        : data.price.toFixed(2)}{' '}
                      ₾
                    </b>
                    {data.onSale && <span>{data.price.toFixed(2)} ₾</span>}
                  </h5>

                  {data.onSale && (
                    <p className={classes.onsalePrice}>
                      You save: {(data.price - data.salePrice).toFixed(2)} ₾
                    </p>
                  )}
                </div>

                <label htmlFor="quantity">Quantity: </label>
                <input
                  id="quantity"
                  name="quantity"
                  type="number"
                  autoComplete="off"
                  defaultValue="1"
                  onChange={changeQuantity}
                ></input>

                <div className={classes.btnsWrapper}>
                  <button className={classes.buyBtn}>Buy Now</button>
                  <button
                    className={classes.addToCartBtn}
                    onClick={addProductToCart}
                  >
                    <img
                      width="28"
                      height="28"
                      src={cartIcon}
                      alt="cart icon"
                    />
                  </button>
                  <button className={classes.deferredBuyBtn}>
                    Deferred Payment
                  </button>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </Fragment>
  );
};

export default ProductPage;

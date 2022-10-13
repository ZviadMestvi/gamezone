import { Fragment, useState } from 'react';

import classes from './ProductPage.module.css';
import mwCover from '../../assets/modern-warfare-cover.webp';
import bfCover from '../../assets/bf2042-cover.webp';
import cartIcon from '../../assets/shoppingCartIcon.svg';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';

const ProductPage = () => {
  const [mainImage, setMainImage] = useState(mwCover);

  return (
    <Fragment>
      <Header />
      <main className={classes.main}>
        <div>
          <h1 className={classes.productTitle}>Call of Duty: Modern Warfare</h1>
          <h2 className={classes.path}>
            Home / Games / Xbox Games / Call of Duty: Modern Warfare
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
              <p className={classes.inStock}>In Stock</p>
              <h4>Call of Duty: Modern Warfare</h4>
              <div className={classes.mobilePrice}>
                <h5>99.00 ₾</h5>

                <label htmlFor="quantity">Quantity: </label>
                <input
                  id="quantity"
                  name="quantity"
                  type="number"
                  autoComplete="off"
                  defaultValue="1"
                ></input>

                <div className={classes.btnsWrapper}>
                  <button className={classes.buyBtn}>Buy Now</button>
                  <button className={classes.addToCartBtn}>
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

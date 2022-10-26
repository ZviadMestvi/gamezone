import { Fragment } from 'react';

import classes from './MainPage.module.css';
import facebookLogo from '../../assets/facebookLogoIcon.svg';
import instagramLogo from '../../assets/instagramLogoIcon.svg';
import youtubeLogo from '../../assets/youtubeLogoIcon.svg';
import Header from '../../components/header/Header';
import HeroCarousel from '../../components/carousel/HeroCarousel';
import CategoriesCarousel from '../../components/carousel/CategoriesCarousel';
import ProductsCarousel from '../../components/carousel/ProductsCarousel';
import Footer from '../../components/footer/Footer';

const MainPage = () => {
  return (
    <Fragment>
      <Header />
      <HeroCarousel />
      <CategoriesCarousel />
      <ProductsCarousel title="Sale" />
      <ProductsCarousel title="New products" />
      <ProductsCarousel title="New games" />
      <hr></hr>
      <ProductsCarousel title="Top production" />
      <ProductsCarousel title="Top brands" />
      <div className={classes.recommendedWrapper}>
        <ProductsCarousel title="Recommended" />
      </div>

      <div className={classes.boxesWrapper}>
        <div className={classes.socialBox}>
          <h1>Stay connected</h1>
          <p>
            Exclusive discounts <br />
            subscribe to our news and get a 10% discount coupon!
          </p>
          <div className={classes.subscribeWrapper}>
            <label></label>
            <input
              type="email"
              name="email"
              placeholder="E-mail..."
              autoComplete="off"
            ></input>
            <button>subscribe</button>
          </div>
        </div>

        <div className={classes.socialBox}>
          <h1>Get social</h1>
          <p>
            Join to our group <br /> and be the first to know all the
            interesting promotions and offers!
          </p>
          <div className={classes.logosWrapper}>
            <img
              width="31"
              height="31"
              src={facebookLogo}
              alt="facebook logo icon"
            />
            <img
              width="31"
              height="31"
              src={instagramLogo}
              alt="instagram logo icon"
            />
            <img
              width="31"
              height="31"
              src={youtubeLogo}
              alt="youtube logo icon"
            />
          </div>
        </div>
      </div>

      <Footer />
    </Fragment>
  );
};

export default MainPage;

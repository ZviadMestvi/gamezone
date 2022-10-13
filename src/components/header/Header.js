import { Fragment, useContext } from 'react';

import classes from './Header.module.css';
import AppContext from '../../store/context';
import hamburgerMenu from '../../assets/hamburgerMenu.svg';
import Search from '../search/Search';
import CartOverlay from '../cart/CartOverlay';
import NavBar from './NavBar';

const Header = () => {
  const context = useContext(AppContext);

  return (
    <Fragment>
      <header className={classes.wrapper}>
        <div className={classes.container}>
          <div
            className={classes.logoWrapper}
            onClick={() => (window.location = '/')}
          ></div>

          <Search />

          <div className={classes.overlay}>
            <CartOverlay />
          </div>
        </div>
      </header>

      <div className={classes.mobileHeader}>
        <div className={classes.menuIconWrapper} onClick={context.toggleNavVis}>
          <img
            width="32"
            height="32"
            src={hamburgerMenu}
            alt="hamburger menu icon"
          />
          <h5>Product Categories</h5>
        </div>

        <div className={classes.mobileOverlay}>
          <CartOverlay />
        </div>
      </div>

      <NavBar />
    </Fragment>
  );
};

export default Header;

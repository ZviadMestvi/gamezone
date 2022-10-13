import classes from './Footer.module.css';

const Footer = () => {
  return (
    <footer>
      <div className={classes.footerWrapper}>
        <div>
          <h1>Menu</h1>
          <ul>
            <li>Sign In</li>
            <li>Create account</li>
            <li>Orders</li>
            <li>Wish list</li>
            <li>Comparison</li>
          </ul>
        </div>

        <div>
          <h1>Shop</h1>
          <ul>
            <li>About us</li>
            <li>Blog</li>
            <li>Contact</li>
          </ul>
        </div>

        <div>
          <h1>Contact</h1>
          <ul>
            <li>Kavtaradze St. #1 / Chavchavadze Ave. #37</li>
            <li>032 2 04 07 00</li>
            <li>Everyday - 10:00 - 22:00</li>
            <li>info@gamezone.ge</li>
            <li>View on map</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

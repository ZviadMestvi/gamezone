import classes from './BrandFilter.module.css';
import dropdownArrow from '../../assets/dropdownArrow.svg';
import { useState } from 'react';

const BrandFilter = () => {
  const [vis, setVis] = useState(true);

  return (
    <div className={classes.wrapper}>
      <div className={classes.filterName} onClick={() => setVis(!vis)}>
        <h2>Brands</h2>
        <img
          className={vis ? classes.activeFilter : ''}
          src={dropdownArrow}
          alt="dropdown arrow"
        />
      </div>

      {vis && (
        <ul className={classes.categoryList}>
          <li>
            <label>
              <input type="checkbox" />
              <div className={classes.checkmark}></div>
              2E
            </label>
          </li>
          <li>
            <label>
              <input type="checkbox" />
              <div className={classes.checkmark}></div>
              ASUS
            </label>
          </li>
          <li>
            <label>
              <input type="checkbox" />
              <div className={classes.checkmark}></div>
              AULA
            </label>
          </li>
          <li>
            <label>
              <input type="checkbox" />
              <div className={classes.checkmark}></div>
              HYPERX
            </label>
          </li>
          <li>
            <label>
              <input type="checkbox" />
              <div className={classes.checkmark}></div>
              Logitech
            </label>
          </li>
          <li>
            <label>
              <input type="checkbox" />
              <div className={`${classes.checkmark} ${classes.active}`}></div>
              Redragon
            </label>
          </li>
          <li>
            <label>
              <input type="checkbox" />
              <div className={classes.checkmark}></div>
              SteelSeries
            </label>
          </li>
          <li>
            <label>
              <input type="checkbox" />
              <div className={`${classes.checkmark} ${classes.active}`}></div>
              TRUST
            </label>
          </li>
        </ul>
      )}
    </div>
  );
};

export default BrandFilter;

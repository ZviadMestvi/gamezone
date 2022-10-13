import { useState } from 'react';
import classes from './PriceFilter.module.css';
import dropdownArrow from '../../assets/dropdownArrow.svg';

const PriceFilter = () => {
  const [vis, setVis] = useState(true);

  return (
    <div className={classes.wrapper}>
      <div className={classes.filterName} onClick={() => setVis(!vis)}>
        <h2>Price</h2>
        <img
          className={vis ? classes.activeFilter : ''}
          src={dropdownArrow}
          alt="dropdown arrow"
        />
      </div>

      {vis && (
        <div className={classes.filterBody}>
          <div>
            <div className={classes.slider}>
              <div className={classes.sliderRange}></div>
              <div className={classes.leftThumb}></div>
              <div className={classes.rightThumb}></div>
            </div>
          </div>

          <div className={classes.rangeInput}>
            <label htmlFor="min"></label>
            <input id="min" name="min" type="number" placeholder="Min" />
            <div className={classes.rangeDash}></div>
            <label htmlFor="max"></label>
            <input id="max" name="max" type="number" placeholder="Max" />
            <button>Filter</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PriceFilter;

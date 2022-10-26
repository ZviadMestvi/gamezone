import { useState } from 'react';

import classes from './BrandFilter.module.css';
import dropdownIcon from '../../assets/dropdownArrow.svg';
import resetIcon from '../../assets/resetIcon.svg';

const BrandFilter = () => {
  const [vis, setVis] = useState(true);
  const [activeBrands, setActiveBrands] = useState([]);
  const [rotationAngle, setRotationAngle] = useState(360);

  const toggleActive = e => {
    const name = e.target.parentNode.textContent;

    if (activeBrands.includes(name)) {
      setActiveBrands(activeBrands.filter(item => item !== name));
      return;
    }

    setActiveBrands(prevState => [...prevState, name]);
  };

  const resetFilter = e => {
    if (!e) e = window.event;
    e.cancelBubble = true;
    if (e.stopPropagation) e.stopPropagation();

    // Rotate icon on click
    e.target.style.transform = `rotate(${rotationAngle}deg)`;
    setRotationAngle(rotationAngle + 360);

    // Reset
    setActiveBrands([]);
  };

  return (
    <div className={classes.wrapper}>
      <div className={classes.filterName} onClick={() => setVis(!vis)}>
        <h2>Brands</h2>
        <div>
          <button onClick={resetFilter}>
            <img src={resetIcon} alt="reset icon" />
          </button>
          <img
            className={`${classes.dropdownIcon} ${
              vis ? classes.activeFilter : ''
            }`}
            src={dropdownIcon}
            alt="dropdown icon"
          />
        </div>
      </div>

      <ul className={`${classes.categoryList} ${!vis ? classes.hide : ''}`}>
        <li>
          <label>
            <input type="checkbox" onChange={toggleActive} />
            <div
              className={`${classes.checkmark} ${
                activeBrands.includes('2E') ? classes.active : ''
              }`}
            ></div>
            2E
          </label>
        </li>
        <li>
          <label>
            <input type="checkbox" onChange={toggleActive} />
            <div
              className={`${classes.checkmark} ${
                activeBrands.includes('ASUS') ? classes.active : ''
              }`}
            ></div>
            ASUS
          </label>
        </li>
        <li>
          <label>
            <input type="checkbox" onChange={toggleActive} />
            <div
              className={`${classes.checkmark} ${
                activeBrands.includes('AULA') ? classes.active : ''
              }`}
            ></div>
            AULA
          </label>
        </li>
        <li>
          <label>
            <input type="checkbox" onChange={toggleActive} />
            <div
              className={`${classes.checkmark} ${
                activeBrands.includes('HYPERX') ? classes.active : ''
              }`}
            ></div>
            HYPERX
          </label>
        </li>
        <li>
          <label>
            <input type="checkbox" onChange={toggleActive} />
            <div
              className={`${classes.checkmark} ${
                activeBrands.includes('Logitech') ? classes.active : ''
              }`}
            ></div>
            Logitech
          </label>
        </li>
        <li>
          <label>
            <input type="checkbox" onChange={toggleActive} />
            <div
              className={`${classes.checkmark} ${
                activeBrands.includes('Redragon') ? classes.active : ''
              }`}
            ></div>
            Redragon
          </label>
        </li>
        <li>
          <label>
            <input type="checkbox" onChange={toggleActive} />
            <div
              className={`${classes.checkmark} ${
                activeBrands.includes('SteelSeries') ? classes.active : ''
              }`}
            ></div>
            SteelSeries
          </label>
        </li>
        <li>
          <label>
            <input type="checkbox" onChange={toggleActive} />
            <div
              className={`${classes.checkmark} ${
                activeBrands.includes('TRUST') ? classes.active : ''
              }`}
            ></div>
            TRUST
          </label>
        </li>
      </ul>
    </div>
  );
};

export default BrandFilter;

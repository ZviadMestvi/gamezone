import { useRef, useState } from 'react';
import classes from './PriceFilter.module.css';
import dropdownArrow from '../../assets/dropdownArrow.svg';
import resetIcon from '../../assets/resetIcon.svg';

const PriceFilter = () => {
  const range = useRef();
  const leftInput = useRef();
  const rightInput = useRef();
  const leftThumb = useRef();
  const rightThumb = useRef();
  const minRange = useRef();
  const maxRange = useRef();
  const [vis, setVis] = useState(true);
  const [rotationAngle, setRotationAngle] = useState(360);

  const minPrice = 0;
  const maxPrice = 12999;

  const setLeftValue = () => {
    const _this = leftInput.current;
    const min = parseInt(_this.min);
    const max = parseInt(_this.max);

    _this.value = Math.min(
      parseInt(_this.value),
      parseInt(rightInput.current.value) - 1
    );

    let percent = ((_this.value - min) / (max - min)) * 100;
    leftThumb.current.style.left = percent + '%';
    range.current.style.left = percent + '%';
    minRange.current.value = Math.round((percent / 100) * max);
  };

  const setRightValue = () => {
    const _this = rightInput.current;
    const min = parseInt(_this.min);
    const max = parseInt(_this.max);

    _this.value = Math.max(
      parseInt(_this.value),
      parseInt(leftInput.current.value) + 1
    );

    let percent = ((_this.value - min) / (max - min)) * 100;
    rightThumb.current.style.right = 100 - percent + '%';
    range.current.style.right = 100 - percent + '%';
    maxRange.current.value = Math.round((percent / 100) * max);
  };

  const setMinValue = element => {
    const e = element.target;

    if (e.value > parseInt(rightInput.current.value) || e.value < minPrice)
      return;

    const min = parseInt(leftInput.current.min);
    const max = parseInt(leftInput.current.max);

    let percent = ((e.value - min) / (max - min)) * 100;
    leftThumb.current.style.left = percent + '%';
    range.current.style.left = percent + '%';
    leftInput.current.value = e.value;
  };

  const setMaxValue = element => {
    const e = element.target;

    if (e.value < parseInt(leftInput.current.value) || e.value > maxPrice)
      return;

    const min = parseInt(rightInput.current.min);
    const max = parseInt(rightInput.current.max);

    let percent = ((e.value - min) / (max - min)) * 100;
    rightThumb.current.style.right = percent + '%';
    range.current.style.right = percent + '%';
    rightInput.current.value = e.value;
  };

  const resetFilter = e => {
    if (!e) e = window.event;
    e.cancelBubble = true;
    if (e.stopPropagation) e.stopPropagation();

    // Rotate icon on click
    e.target.style.transform = `rotate(${rotationAngle}deg)`;
    setRotationAngle(rotationAngle + 360);

    // Reset
    minRange.current.value = minPrice;
    leftThumb.current.style.left = 0 + '%';
    leftInput.current.value = minPrice;
    range.current.style.left = 0 + '%';

    maxRange.current.value = maxPrice;
    rightThumb.current.style.right = 0 + '%';
    rightInput.current.value = maxPrice;
    range.current.style.right = 0 + '%';
  };

  return (
    <div className={classes.wrapper}>
      <div className={classes.filterName} onClick={() => setVis(!vis)}>
        <h2 onClick={setLeftValue}>Price</h2>
        <div>
          <button onClick={resetFilter}>
            <img src={resetIcon} alt="reset icon" />
          </button>
          <img
            className={vis ? classes.activeFilter : ''}
            src={dropdownArrow}
            alt="dropdown arrow"
          />
        </div>
      </div>

      <div className={`${classes.filterBody} ${!vis ? classes.hide : ''}`}>
        <div className={classes.sliderWrapper}>
          <label htmlFor="minPriceRange"></label>
          <input
            ref={leftInput}
            id="minPriceRange"
            name="minPriceRange"
            aria-label="minPriceRange"
            type="range"
            min={minPrice}
            max={maxPrice}
            defaultValue={minPrice}
            onInput={setLeftValue}
          />

          <label htmlFor="maxPriceRange"></label>
          <input
            ref={rightInput}
            id="maxPriceRange"
            name="maxPriceRange"
            aria-label="maxPriceRange"
            type="range"
            min={minPrice}
            max={maxPrice}
            defaultValue={maxPrice}
            onInput={setRightValue}
          />

          <div className={classes.slider}>
            <div className={classes.track}></div>
            <div ref={range} className={classes.range}></div>
            <div ref={leftThumb} className={classes.leftThumb}></div>
            <div ref={rightThumb} className={classes.rightThumb}></div>
          </div>
        </div>

        <div className={classes.rangeInput}>
          <label htmlFor="min"></label>
          <input
            ref={minRange}
            id="min"
            name="min"
            type="number"
            min={minPrice}
            max={maxPrice}
            placeholder="Min"
            defaultValue={minPrice}
            onChange={setMinValue}
          />
          <div className={classes.rangeDash}></div>
          <label htmlFor="max"></label>
          <input
            ref={maxRange}
            id="max"
            name="max"
            type="number"
            min={minPrice}
            max={maxPrice}
            placeholder="Max"
            defaultValue={maxPrice}
            onChange={setMaxValue}
          />
          <button>Filter</button>
        </div>
      </div>
    </div>
  );
};

export default PriceFilter;

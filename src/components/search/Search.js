import { useRef, useEffect, useState } from 'react';

import classes from './Search.module.css';
// import SearchProduct from '../products/SearchProduct/SearchProduct';

const Search = () => {
  const searchRef = useRef();
  const [overlayVis, setOverlayVis] = useState(false);

  const useOutsideClickDetector = function (ref) {
    useEffect(() => {
      const handleClickOutside = event => {
        if (ref.current && !ref.current.contains(event.target)) {
          setOverlayVis(false);
        }
      };

      document.addEventListener('mousedown', handleClickOutside);
      return () =>
        document.removeEventListener('mousedown', handleClickOutside);
    }, [ref]);
  };
  useOutsideClickDetector(searchRef);

  const inputFocusHandler = () => {
    setOverlayVis(true);
  };

  return (
    <div ref={searchRef} className={classes.searchWrapper}>
      <div className={classes.searchBar}>
        <label htmlFor="search"></label>
        <input
          type="text"
          name="search"
          placeholder="Search..."
          autoComplete="off"
          onFocus={inputFocusHandler}
        ></input>

        <button aria-label="search for products" type="button">
          <svg width="18" height="18" viewBox="0 0 18 18">
            <path
              fill="#fff"
              d="M17.7731 16.711L12.6087 11.5428C13.6268 10.3218 14.2392 8.76138 14.2392 7.0571C14.2392 3.169 11.0483 0.00761414 7.12327 0.00761414C3.19828 0.00761414 0 3.17269 0 7.06079C0 10.9489 3.1909 14.1103 7.11589 14.1103C8.78328 14.1103 10.3179 13.5385 11.5352 12.5831L16.7181 17.766C17.0206 18.0685 17.4706 18.0685 17.7731 17.766C18.0756 17.4635 18.0756 17.0134 17.7731 16.711ZM1.51245 7.06079C1.51245 4.00638 4.02828 1.52375 7.11589 1.52375C10.2035 1.52375 12.7193 4.00638 12.7193 7.06079C12.7193 10.1152 10.2035 12.5978 7.11589 12.5978C4.02828 12.5978 1.51245 10.1115 1.51245 7.06079Z"
            />
          </svg>
        </button>
      </div>

      <div
        className={`${classes.resultsWrapper} ${
          overlayVis ? classes.displayOverlay : ''
        }`}
      >
        <div className={classes.itemCountWrapper}>
          <p>Results: </p>
          <p>0 Items</p>
        </div>

        <div className={classes.productsWrapper}>
          <p className={classes.noResults}>
            No results found, try another query.
          </p>
        </div>

        <div className={classes.viewAllBtn}>
          <button>View All</button>
        </div>
      </div>
    </div>
  );
};

export default Search;

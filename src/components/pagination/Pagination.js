import { useState } from 'react';
import classes from './Pagination.module.css';

import { testProducts } from '../../HelperConsts';

const Pagination = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [minPageLimit, setMinPageLimit] = useState(0);
  const [maxPageLimit, setMaxPageLimit] = useState(5);

  let pageIncrementEllipses = null;
  if (testProducts.length > maxPageLimit) {
    pageIncrementEllipses = (
      <li>
        <p>...</p>
      </li>
    );
  }

  let pageDecremenEllipses = null;
  if (minPageLimit >= 1) {
    pageDecremenEllipses = (
      <li>
        <p>...</p>
      </li>
    );
  }

  const renderPagination = testProducts.map((_, i) => {
    if (i < maxPageLimit + 1 && i > minPageLimit) {
      return (
        <li
          key={i}
          className={currentPage === i ? classes.active : ''}
          onClick={() => setCurrentPage(i)}
        >
          <p>{i}</p>
        </li>
      );
    } else return null;
  });

  return (
    <div className={classes.wrapper}>
      <div className={classes.arrow}>
        <svg viewBox="0 0 6 12">
          <path
            d="M5.08958 0.0307824C4.871 -0.045908 4.62784 0.0238734 4.48311 0.204745L0.119504 5.6594C-0.0398407 5.8586 -0.0398407 6.14169 0.11954 6.34089L4.48315 11.7953C4.58868 11.9272 4.7466 12 4.90918 12C4.96947 12 5.03049 11.9899 5.08962 11.9692C5.30824 11.8925 5.45453 11.6861 5.45453 11.4545V0.54547C5.45449 0.313799 5.3082 0.107437 5.08958 0.0307824Z"
            fill="black"
          />
        </svg>
      </div>
      <ul>
        {pageDecremenEllipses}
        {renderPagination}
        {pageIncrementEllipses}
      </ul>
      <div className={classes.arrow}>
        <svg viewBox="0 0 6 12" style={{ transform: `rotate(180deg)` }}>
          <path
            d="M5.08958 0.0307824C4.871 -0.045908 4.62784 0.0238734 4.48311 0.204745L0.119504 5.6594C-0.0398407 5.8586 -0.0398407 6.14169 0.11954 6.34089L4.48315 11.7953C4.58868 11.9272 4.7466 12 4.90918 12C4.96947 12 5.03049 11.9899 5.08962 11.9692C5.30824 11.8925 5.45453 11.6861 5.45453 11.4545V0.54547C5.45449 0.313799 5.3082 0.107437 5.08958 0.0307824Z"
            fill="black"
          />
        </svg>
      </div>
    </div>
  );
};

export default Pagination;

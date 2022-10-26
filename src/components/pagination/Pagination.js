import { useState } from 'react';

import classes from './Pagination.module.css';

const Pagination = props => {
  const [minPage, setMinPage] = useState(0);
  const [maxPage, setMaxPage] = useState(5);
  const pageNumberLimit = 5;

  const pages = [];
  for (let i = 1; i <= props.size; i++) {
    pages.push(i);
  }

  const prevPage = () => {
    if ((props.currentPage - 1) % pageNumberLimit === 0) {
      setMaxPage(maxPage - pageNumberLimit);
      setMinPage(minPage - pageNumberLimit);
    }
    props.changeCurrentPage(props.currentPage - 1);
  };

  const nextPage = () => {
    if (props.currentPage + 1 > maxPage) {
      setMaxPage(maxPage + pageNumberLimit);
      setMinPage(minPage + pageNumberLimit);
    }
    props.changeCurrentPage(props.currentPage + 1);
  };

  let pageIncrementEllipses = null;
  if (pages.length > maxPage) {
    pageIncrementEllipses = (
      <li onClick={nextPage}>
        <p>...</p>
      </li>
    );
  }

  let pageDecremenEllipses = null;
  if (minPage >= 1) {
    pageDecremenEllipses = (
      <li onClick={prevPage}>
        <p>...</p>
      </li>
    );
  }

  const renderPagination = pages.map((page, i) => {
    if (page <= maxPage && page > minPage) {
      return (
        <li
          key={i}
          className={props.currentPage === page ? classes.active : ''}
          onClick={props.changeCurrentPage.bind(null, page)}
        >
          <p>{page}</p>
        </li>
      );
    } else {
      return null;
    }
  });

  return (
    <div className={classes.wrapper}>
      <div className={classes.arrow} onClick={prevPage}>
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
      <div className={classes.arrow} onClick={nextPage}>
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

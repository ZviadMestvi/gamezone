import { Fragment, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import {
  sortAlphabeticallyAsc,
  sortAlphabeticallyDesc,
  sortByReleaseDateAsc,
  sortByReleaseDateDesc,
  sortByPriceAsc,
  sortByPriceDesc,
} from '../../HelperFunctions';

import classes from './CategoryPage.module.css';
import dropdownArrow from '../../assets/dropdownArrow.svg';
import products from '../../data/Products.json';
import categories from '../../data/Categories.json';
import Header from '../../components/header/Header';
import PriceFilter from '../../components/filters/PriceFilter';
import BrandFilter from '../../components/filters/BrandFilter';
import ListViewProduct from '../../components/products/ListViewProduct/ListViewProduct';
import DefaultProduct from '../../components/products/DefaultProduct/DefaultProduct';
import LineViewProduct from '../../components/products/LineViewProduct/LineViewProduct';
import Pagination from '../../components/pagination/Pagination';
import Footer from '../../components/footer/Footer';

const CategoryPage = () => {
  const { category, subcategory } = useParams();
  const title = category.replace(/_/g, ' ').replace(/ and /, '&');
  const [currentPage, setCurrentPage] = useState(1);
  const [filtersVis, setFiltersVis] = useState(false);
  const [sortNameVis, setSortNameVis] = useState(false);
  const [sortPPPVis, setSortPPPVis] = useState(false);
  const [ppp, setPpp] = useState(localStorage.getItem('ppp') ?? '24'); // Products Per Page
  const [productsArr, setProductsArr] = useState(
    JSON.parse(localStorage.getItem('sortedProducts')) ?? products
  );
  const [productView, setProductView] = useState(
    localStorage.getItem('productsView') ?? 'grid'
  );
  const [sortBy, setSortBy] = useState(
    localStorage.getItem('sortMethod') ?? 'Featured'
  );

  const changeCurrentPage = value => {
    setCurrentPage(value);
  };

  const changeProductView = view => {
    localStorage.setItem('productsView', view);
    if (view === 'grid') setProductView('grid');
    if (view === 'list') setProductView('list');
    if (view === 'line') setProductView('line');
  };

  const changePPP = value => {
    localStorage.setItem('ppp', value);
    setPpp(value);
  };

  const changeSortMethod = e => {
    let sortedArr;

    switch (e.target.textContent) {
      case 'Name: A - Z':
        sortedArr = sortAlphabeticallyAsc(products);
        break;
      case 'Name: Z - A':
        sortedArr = sortAlphabeticallyDesc(products);
        break;
      case 'Release Date: New - Old':
        sortedArr = sortByReleaseDateAsc(products);
        break;
      case 'Release Date: Old - New':
        sortedArr = sortByReleaseDateDesc(products);
        break;
      case 'Price: Low - High':
        sortedArr = sortByPriceAsc(products);
        break;
      case 'Price: High - Low':
        sortedArr = sortByPriceDesc(products);
        break;
      default:
        sortedArr = products;
    }

    setProductsArr(sortedArr);
    localStorage.setItem('sortedProducts', JSON.stringify(sortedArr));

    setSortBy(e.target.textContent);
    localStorage.setItem('sortMethod', e.target.textContent);
  };

  const renderCategories = categories[category]?.map((ctg, i) => {
    return (
      <li key={ctg}>
        <Link to={`/categories/${category}/${ctg}`}>
          <p>{ctg}</p>
        </Link>
      </li>
    );
  });

  // Calculates how many products should be rendered on each page
  const indexOfLastProduct = currentPage * ppp;
  const indexOfFirstProduct = indexOfLastProduct - ppp;
  const currentProducts = productsArr.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const renderProducts = currentProducts.map((product, i) => {
    if (i + 1 > ppp) return null;

    if (productView === 'grid') {
      return <DefaultProduct key={i} grid={true} data={product} />;
    }

    if (productView === 'list') {
      return <ListViewProduct key={i} data={product} />;
    }

    if (productView === 'line') {
      return <LineViewProduct key={i} data={product} />;
    }

    return null;
  });

  return (
    <Fragment>
      <Header />
      <main className={classes.main}>
        <section className={classes.filterSection}>
          <h1 className={classes.mainTitle}>Filters</h1>
          <div>
            <div className={classes.categoriesFilter}>
              <ul>{renderCategories}</ul>
            </div>
            <button
              className={classes.categoriesTitle}
              onClick={() => setFiltersVis(!filtersVis)}
            >
              Product filters
              <span>
                <img src={dropdownArrow} alt="dropdown arrow" />
              </span>
            </button>
            <div
              className={`${classes.filtersWrapper} ${
                filtersVis ? classes.show : ''
              }`}
            >
              <PriceFilter />
              <BrandFilter />
            </div>
          </div>
        </section>

        <section className={classes.productsSection}>
          <div>
            <h1 className={classes.mainTitle}>
              {!subcategory ? title : subcategory}{' '}
              <span>
                Home / {title} {subcategory ? `/ ${subcategory}` : ''}
              </span>
            </h1>
          </div>

          <div className={classes.sortWrapper}>
            <div className={classes.sortDropdowns}>
              <div className={classes.sortName}>
                <button onClick={() => setSortNameVis(!sortNameVis)}>
                  <p>{sortBy}</p>
                  <img
                    width="10"
                    height="10"
                    className={sortNameVis ? classes.sortActive : ''}
                    src={dropdownArrow}
                    alt="dropdown arrow"
                  />
                </button>
                {sortNameVis && (
                  <ul>
                    <li onClick={changeSortMethod}>
                      <p
                        className={
                          sortBy === 'Featured' ? classes.activeSort : ''
                        }
                      >
                        Featured
                      </p>
                    </li>
                    <li onClick={changeSortMethod}>
                      <p
                        className={
                          sortBy === 'Name: A - Z' ? classes.activeSort : ''
                        }
                      >
                        Name: A - Z
                      </p>
                    </li>
                    <li onClick={changeSortMethod}>
                      <p
                        className={
                          sortBy === 'Name: Z - A' ? classes.activeSort : ''
                        }
                      >
                        Name: Z - A
                      </p>
                    </li>
                    <li onClick={changeSortMethod}>
                      <p
                        className={
                          sortBy === 'Release Date: New - Old'
                            ? classes.activeSort
                            : ''
                        }
                      >
                        Release Date: New - Old
                      </p>
                    </li>
                    <li onClick={changeSortMethod}>
                      <p
                        className={
                          sortBy === 'Release Date: Old - New'
                            ? classes.activeSort
                            : ''
                        }
                      >
                        Release Date: Old - New
                      </p>
                    </li>
                    <li onClick={changeSortMethod}>
                      <p
                        className={
                          sortBy === 'Price: Low - High'
                            ? classes.activeSort
                            : ''
                        }
                      >
                        Price: Low - High
                      </p>
                    </li>
                    <li onClick={changeSortMethod}>
                      <p
                        className={
                          sortBy === 'Price: High - Low'
                            ? classes.activeSort
                            : ''
                        }
                      >
                        Price: High - Low
                      </p>
                    </li>
                  </ul>
                )}
              </div>

              <div className={classes.ppp}>
                <button onClick={() => setSortPPPVis(!sortPPPVis)}>
                  <p>{ppp} Products Per Page</p>
                  <img
                    width="10"
                    height="10"
                    className={sortPPPVis ? classes.sortActive : ''}
                    src={dropdownArrow}
                    alt="dropdown arrow"
                  />
                </button>
                {sortPPPVis && (
                  <ul>
                    <li onClick={changePPP.bind(null, '12')}>
                      <p className={ppp === '12' ? classes.activeSort : ''}>
                        12 Products Per Page
                      </p>
                    </li>
                    <li onClick={changePPP.bind(null, '24')}>
                      <p className={ppp === '24' ? classes.activeSort : ''}>
                        24 Products Per Page
                      </p>
                    </li>
                    <li onClick={changePPP.bind(null, '48')}>
                      <p className={ppp === '48' ? classes.activeSort : ''}>
                        48 Products Per Page
                      </p>
                    </li>
                    <li onClick={changePPP.bind(null, '96')}>
                      <p className={ppp === '96' ? classes.activeSort : ''}>
                        96 Products Per Page
                      </p>
                    </li>
                  </ul>
                )}
              </div>
            </div>

            <div className={classes.sortBtns}>
              <button
                aria-label="grid view"
                className={productView === 'grid' ? classes.activeSortBtn : ''}
                onClick={changeProductView.bind(null, 'grid')}
              >
                <svg width="26" height="26" viewBox="0 0 27 27">
                  <path
                    d="M11.3646 3.89063H3.89062V11.3646H11.3646V3.89063Z"
                    stroke="white"
                    strokeLinecap="square"
                  />
                  <path
                    d="M23.1095 3.89063H15.6355V11.3646H23.1095V3.89063Z"
                    stroke="white"
                    strokeLinecap="square"
                  />
                  <path
                    d="M11.3646 15.6354H3.89062V23.1094H11.3646V15.6354Z"
                    stroke="white"
                    strokeLinecap="square"
                  />
                  <path
                    d="M23.1095 15.6354H15.6355V23.1094H23.1095V15.6354Z"
                    stroke="white"
                    strokeLinecap="square"
                  />
                </svg>
              </button>
              <button
                aria-label="list view"
                className={productView === 'list' ? classes.activeSortBtn : ''}
                onClick={changeProductView.bind(null, 'list')}
              >
                <svg width="22" height="22" viewBox="0 0 25 25">
                  <path
                    d="M6.25611 2.12188H2.12183V6.2791H6.25611V2.12188Z"
                    fill="white"
                  />
                  <path
                    d="M22.878 3.23473H7.98608V5.07244H22.878V3.23473Z"
                    fill="white"
                  />
                  <path
                    d="M6.25611 10.4193H2.12183V14.5765H6.25611V10.4193Z"
                    fill="white"
                  />
                  <path
                    d="M22.878 11.5321H7.98608V13.3698H22.878V11.5321Z"
                    fill="white"
                  />
                  <path
                    d="M6.25611 18.7209H2.12183V22.8781H6.25611V18.7209Z"
                    fill="white"
                  />
                  <path
                    d="M22.878 19.8295H7.98608V21.6672H22.878V19.8295Z"
                    fill="white"
                  />
                </svg>
              </button>
              <button
                aria-label="line view"
                className={productView === 'line' ? classes.activeSortBtn : ''}
                onClick={changeProductView.bind(null, 'line')}
              >
                <svg width="20" height="20" viewBox="0 0 21 22">
                  <g clipPath="url(#clip0_85_195)">
                    <path
                      d="M0.25 1.93173H20.75V4.49423H0.25V1.93173Z"
                      fill="white"
                    />
                    <path
                      d="M0.25 7.05673H20.75V9.61923H0.25V7.05673Z"
                      fill="white"
                    />
                    <path
                      d="M0.25 12.1817H20.75V14.7442H0.25V12.1817Z"
                      fill="white"
                    />
                    <path
                      d="M0.25 17.3067H20.75V19.8692H0.25V17.3067Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_85_195">
                      <rect
                        width="20.5"
                        height="20.5"
                        fill="white"
                        transform="translate(0.25 0.650476)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </button>
            </div>
          </div>

          <div
            className={productView === 'grid' ? classes.productsWrapper : ''}
          >
            {renderProducts}
          </div>

          <Pagination
            size={Math.ceil(products.length / +ppp)}
            currentPage={currentPage}
            changeCurrentPage={changeCurrentPage}
          />
        </section>
      </main>
      <Footer />
    </Fragment>
  );
};

export default CategoryPage;

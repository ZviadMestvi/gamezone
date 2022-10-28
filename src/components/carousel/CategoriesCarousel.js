import { Link } from 'react-router-dom';

import classes from './CategoriesCarousel.module.css';
import consolesBg from '../../assets/category-pics/consoles-bg.webp';
import gamesBg from '../../assets/category-pics/games-bg.webp';
import laptopsBg from '../../assets/category-pics/laptops-bg.webp';
import monitorsBg from '../../assets/category-pics/monitors-bg.webp';
import vrBg from '../../assets/category-pics/vr-bg.webp';
import accessoriesBg from '../../assets/category-pics/accessories-bg.webp';

const CategoriesCarousel = () => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.categories}>
        <div className={classes.categoryWrapper}>
          <Link
            to={`/categories/consoles`}
            state={{ title: 'Consoles', category: 'consoles' }}
            className={classes.category}
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.9),
                    rgba(0, 0, 0, 0.9)), url(${consolesBg})`,
            }}
          >
            Consoles
          </Link>
        </div>
        <div className={classes.categoryWrapper}>
          <Link
            to={`/categories/games`}
            state={{ title: 'Games', category: 'games' }}
            className={`${classes.category} ${classes.halfCategory}`}
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.9),
                  rgba(0, 0, 0, 0.9)), url(${gamesBg})`,
            }}
          >
            Games
          </Link>
          <Link
            to={`/categories/gamingLaptops`}
            state={{ title: 'Gaming Laptops', category: 'gamingLaptops' }}
            className={`${classes.category} ${classes.halfCategory}`}
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.9),
                    rgba(0, 0, 0, 0.9)), url(${laptopsBg})`,
            }}
          >
            Gaming laptops
          </Link>
        </div>

        <div className={classes.categoryWrapper}>
          <Link
            to={`/categories/gamingMonitors`}
            state={{
              title: 'Gaming monitors & TV',
              category: 'gamingMonitors',
            }}
            className={classes.category}
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.9),
                    rgba(0, 0, 0, 0.9)), url(${monitorsBg})`,
            }}
          >
            Gaming Monitors & TV
          </Link>
        </div>

        <div className={classes.categoryWrapper}>
          <Link
            to={`/categories/VRgadgets`}
            state={{ title: 'VR Gadgets', category: 'VRgadgets' }}
            className={`${classes.category} ${classes.halfCategory}`}
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.9),
                    rgba(0, 0, 0, 0.9)), url(${vrBg})`,
            }}
          >
            VR Gadgets
          </Link>
          <Link
            to={`/categories/gamingAccessories`}
            state={{
              title: 'Gaming Accessories',
              category: 'gamingAccessories',
            }}
            className={`${classes.category} ${classes.halfCategory}`}
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.9),
                    rgba(0, 0, 0, 0.9)), url(${accessoriesBg})`,
            }}
          >
            Gaming Accessories
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CategoriesCarousel;

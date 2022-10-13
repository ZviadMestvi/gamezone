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
          <div
            className={classes.category}
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.9),
                    rgba(0, 0, 0, 0.9)), url(${consolesBg})`,
            }}
          >
            <h2>Consoles</h2>
          </div>
        </div>

        <div className={classes.categoryWrapper}>
          <div
            className={`${classes.category} ${classes.halfCategory}`}
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.9),
                    rgba(0, 0, 0, 0.9)), url(${gamesBg})`,
            }}
          >
            <h2>Games</h2>
          </div>
          <div
            className={`${classes.category} ${classes.halfCategory}`}
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.9),
                    rgba(0, 0, 0, 0.9)), url(${laptopsBg})`,
            }}
          >
            <h2>Gaming laptops</h2>
          </div>
        </div>

        <div className={classes.categoryWrapper}>
          <div
            className={classes.category}
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.9),
                    rgba(0, 0, 0, 0.9)), url(${monitorsBg})`,
            }}
          >
            <h2>Gaming monitors & TV</h2>
          </div>
        </div>

        <div className={classes.categoryWrapper}>
          <div
            className={`${classes.category} ${classes.halfCategory}`}
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.9),
                    rgba(0, 0, 0, 0.9)), url(${vrBg})`,
            }}
          >
            <h2>VR gadgets</h2>
          </div>
          <div
            className={`${classes.category} ${classes.halfCategory}`}
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.9),
                    rgba(0, 0, 0, 0.9)), url(${accessoriesBg})`,
            }}
          >
            <h2>Gaming accessories</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoriesCarousel;

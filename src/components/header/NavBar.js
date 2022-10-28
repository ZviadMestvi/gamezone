import { Fragment, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import classes from './NavBar.module.css';
import downArrowIcon from '../../assets/dropdownArrow.svg';
import categories from '../../data/Categories.json';

const NavBar = () => {
  const { mobileNavVis } = useSelector(state => state.main);
  const [openedCategory, setOpenedCategory] = useState();

  const handleDropdown = (index, e) => {
    console.log(e.target);
    if (index === openedCategory) return setOpenedCategory(0);
    setOpenedCategory(index);
  };

  const renderConsoles = (
    <ul>
      {categories.consoles.map(console => {
        return (
          <li key={console}>
            <Link to={`/categories/consoles/${console}`}>
              <p>{console}</p>
            </Link>
          </li>
        );
      })}
    </ul>
  );
  const renderGames = (
    <ul>
      {categories.games.map(console => {
        return (
          <li key={console}>
            <Link to={`/categories/games/${console}`}>
              <p>{console}</p>
            </Link>
          </li>
        );
      })}
    </ul>
  );
  const renderRobots = (
    <ul>
      {categories.robots_and_games.map(console => {
        return (
          <li key={console}>
            <Link to={`/categories/robots_and_games/${console}`}>
              <p>{console}</p>
            </Link>
          </li>
        );
      })}
    </ul>
  );
  const renderGamingAccs = (
    <ul>
      {categories.gaming_accessories.map(console => {
        return (
          <li key={console}>
            <Link to={`/categories/gaming_accessories/${console}`}>
              <p>{console}</p>
            </Link>
          </li>
        );
      })}
    </ul>
  );
  const renderBrandedAccs = (
    <ul>
      {categories.branded_accessories.map(console => {
        return (
          <li key={console}>
            <Link to={`/categories/branded_accessories/${console}`}>
              <p>{console}</p>
            </Link>
          </li>
        );
      })}
    </ul>
  );
  const renderGamingMonitors = (
    <ul>
      {categories.gaming_monitors_and_TV.map(console => {
        return (
          <li key={console}>
            <Link to={`/categories/gaming_monitors_and_TV/${console}`}>
              <p>{console}</p>
            </Link>
          </li>
        );
      })}
    </ul>
  );
  const renderGamingLaptops = (
    <ul>
      {categories.gaming_laptops.map(console => {
        return (
          <li key={console}>
            <Link to={`/categories/gaming_laptops/${console}`}>
              <p>{console}</p>
            </Link>
          </li>
        );
      })}
    </ul>
  );
  const renderVRgadgets = (
    <ul>
      {categories.VR_gadgets.map(console => {
        return (
          <li key={console}>
            <Link to={`/categories/VR_gadgets/${console}`}>
              <p>{console}</p>
            </Link>
          </li>
        );
      })}
    </ul>
  );
  const renderPCcomponents = (
    <ul>
      {categories.PC_components.map(console => {
        return (
          <li key={console}>
            <Link to={`/categories/PC_components/${console}`}>
              <p>{console}</p>
            </Link>
          </li>
        );
      })}
    </ul>
  );
  const renderAccessories = (
    <ul>
      {categories.accessories.map(console => {
        return (
          <li key={console}>
            <Link to={`/categories/accessories/${console}`}>
              <p>{console}</p>
            </Link>
          </li>
        );
      })}
    </ul>
  );
  const renderTablets = (
    <ul>
      {categories.tablets.map(console => {
        return (
          <li key={console}>
            <Link to={`/categories/tablets/${console}`}>
              <p>{console}</p>
            </Link>
          </li>
        );
      })}
    </ul>
  );
  const renderAudioSys = (
    <ul>
      {categories.audio_systems.map(console => {
        return (
          <li key={console}>
            <Link to={`/categories/audio_systems/${console}`}>
              <p>{console}</p>
            </Link>
          </li>
        );
      })}
    </ul>
  );
  const renderChangeZone = (
    <ul>
      {categories.change_zone.map(console => {
        return (
          <li key={console}>
            <Link to={`/categories/change_zone/${console}`}>
              <p>{console}</p>
            </Link>
          </li>
        );
      })}
    </ul>
  );
  const renderNetworking = (
    <ul>
      {categories.networking.map(console => {
        return (
          <li key={console}>
            <Link to={`/categories/networking/${console}`}>
              <p>{console}</p>
            </Link>
          </li>
        );
      })}
    </ul>
  );

  return (
    <Fragment>
      <nav className={`${classes.nav} ${mobileNavVis ? classes.show : ''}`}>
        <ul className={classes.categories}>
          <li className={classes.category}>
            <div className={classes.linkWrapper}>
              <p className={classes.title}>Catalogue</p>
              <span className={classes.arrowDown}>
                <img
                  width="10"
                  height="10"
                  src={downArrowIcon}
                  alt="dropdown arrow"
                />
              </span>
              <div>
                <span
                  className={classes.mobileArrowDown}
                  onClick={handleDropdown.bind(null, 1)}
                >
                  <img
                    className={
                      openedCategory === 1 ? classes.activeDropdownArrow : ''
                    }
                    src={downArrowIcon}
                    alt="dropdown arrow"
                    width="10"
                    height="10"
                  />
                </span>
              </div>
              <div className={classes.catalogueMenuWrapper}>
                <div
                  className={`${classes.catalogueMenu} ${
                    openedCategory === 1 ? classes.activeDropdownMenu : ''
                  }`}
                >
                  <div className={classes.menuContainer}>
                    <div>
                      <Link to="/categories/consoles">
                        <h3>Consoles</h3>
                      </Link>
                      {renderConsoles}
                    </div>
                    <div>
                      <Link to="/categories/games">
                        <h3>Games</h3>
                      </Link>
                      {renderGames}
                    </div>
                    <div>
                      <Link to="/categories/gaming_monitors_and_TV">
                        <h3>Gaming Monitors & TV</h3>
                      </Link>
                      {renderGamingMonitors}
                    </div>
                  </div>

                  <div className={classes.menuContainer}>
                    <div>
                      <Link to="/categories/gaming_laptops">
                        <h3>Gaming Laptops</h3>
                      </Link>
                      {renderGamingLaptops}
                    </div>
                    <div>
                      <Link to="/categories/VR_gadgets">
                        <h3>VR Gadgets</h3>
                      </Link>
                      {renderVRgadgets}
                    </div>
                    <div>
                      <Link to="/categories/gaming_accessories">
                        <h3>Gaming Accessories</h3>
                      </Link>
                      {renderGamingAccs}
                    </div>
                  </div>

                  <div className={classes.menuContainer}>
                    <div>
                      <Link to="/categories/PC_components">
                        <h3>PC Components</h3>
                      </Link>
                      {renderPCcomponents}
                    </div>
                    <div>
                      <Link to="/categories/accessories">
                        <h3>Accessories</h3>
                      </Link>
                      {renderAccessories}
                    </div>
                    <div>
                      <Link to="/categories/scooters">
                        <h3>Scooters</h3>
                      </Link>
                    </div>
                    <div>
                      <Link to="/categories/robots_and_toys">
                        <h3>Robots & Toys</h3>
                      </Link>
                      {renderRobots}
                    </div>
                  </div>

                  <div className={classes.menuContainer}>
                    <div>
                      <Link to="/categories/tablets">
                        <h3>Tablets</h3>
                      </Link>
                      {renderTablets}
                    </div>
                    <div>
                      <Link to="/categories/audio_systems">
                        <h3>Audio Systems</h3>
                      </Link>
                      {renderAudioSys}
                    </div>
                    <div>
                      <Link to="/categories/change_zone">
                        <h3>Change Zone</h3>
                      </Link>
                      {renderChangeZone}
                    </div>
                    <div>
                      <Link to="/categories/networking">
                        <h3>Networking</h3>
                      </Link>
                      {renderNetworking}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>

          <li className={classes.category}>
            <div className={classes.linkWrapper}>
              <Link to="/categories/new" className={classes.title}>
                New
              </Link>
            </div>
          </li>

          <li className={classes.category}>
            <div className={classes.linkWrapper}>
              <Link to="/categories/consoles" className={classes.title}>
                Consoles
                <span className={classes.arrowDown}>
                  <img
                    width="10"
                    height="10"
                    src={downArrowIcon}
                    alt="dropdown arrow"
                  />
                </span>
              </Link>
              <div
                className={classes.mobileArrowDown}
                onClick={handleDropdown.bind(null, 2)}
              >
                <img
                  className={
                    openedCategory === 2 ? classes.activeDropdownArrow : ''
                  }
                  src={downArrowIcon}
                  alt="dropdown arrow"
                  width="10"
                  height="10"
                />
              </div>
            </div>
            <div
              className={`${classes.categoryMenu} ${
                openedCategory === 2 ? classes.activeDropdownMenu : ''
              }`}
            >
              {renderConsoles}
            </div>
          </li>

          <li className={classes.category}>
            <div className={classes.linkWrapper}>
              <Link to="/categories/games" className={classes.title}>
                Games
                <span className={classes.arrowDown}>
                  <img
                    width="10"
                    height="10"
                    src={downArrowIcon}
                    alt="dropdown arrow"
                  />
                </span>
              </Link>
              <div
                className={classes.mobileArrowDown}
                onClick={handleDropdown.bind(null, 3)}
              >
                <img
                  className={
                    openedCategory === 3 ? classes.activeDropdownArrow : ''
                  }
                  src={downArrowIcon}
                  alt="dropdown arrow"
                  width="10"
                  height="10"
                />
              </div>
            </div>
            <div
              className={`${classes.categoryMenu} ${
                openedCategory === 3 ? classes.activeDropdownMenu : ''
              }`}
            >
              {renderGames}
            </div>
          </li>

          <li className={classes.category}>
            <div className={classes.linkWrapper}>
              <Link to="/categories/robots_and_games" className={classes.title}>
                Robots & Games
                <span className={classes.arrowDown}>
                  <img
                    width="10"
                    height="10"
                    src={downArrowIcon}
                    alt="dropdown arrow"
                  />
                </span>
              </Link>
              <div>
                <span
                  className={classes.mobileArrowDown}
                  onClick={handleDropdown.bind(null, 4)}
                >
                  <img
                    className={
                      openedCategory === 4 ? classes.activeDropdownArrow : ''
                    }
                    src={downArrowIcon}
                    alt="dropdown arrow"
                    width="10"
                    height="10"
                  />
                </span>
              </div>
            </div>
            <div
              className={`${classes.categoryMenu} ${
                openedCategory === 4 ? classes.activeDropdownMenu : ''
              }`}
            >
              {renderRobots}
            </div>
          </li>

          <li className={classes.category}>
            <div className={classes.linkWrapper}>
              <Link
                to="/categories/gaming_accessories"
                className={classes.title}
              >
                Gaming Accessories
                <span className={classes.arrowDown}>
                  <img
                    width="10"
                    height="10"
                    src={downArrowIcon}
                    alt="dropdown arrow"
                  />
                </span>
              </Link>
              <div>
                <span
                  className={classes.mobileArrowDown}
                  onClick={handleDropdown.bind(null, 5)}
                >
                  <img
                    className={
                      openedCategory === 5 ? classes.activeDropdownArrow : ''
                    }
                    src={downArrowIcon}
                    alt="dropdown arrow"
                    width="10"
                    height="10"
                  />
                </span>
              </div>
            </div>
            <div
              className={`${classes.categoryMenu} ${
                openedCategory === 5 ? classes.activeDropdownMenu : ''
              }`}
            >
              {renderGamingAccs}
            </div>
          </li>

          <li className={classes.category}>
            <div className={classes.linkWrapper}>
              <Link
                to="/categories/branded_accessories"
                className={classes.title}
              >
                Branded Accessories
                <span className={classes.arrowDown}>
                  <img
                    width="10"
                    height="10"
                    src={downArrowIcon}
                    alt="dropdown arrow"
                  />
                </span>
              </Link>
              <div>
                <span
                  className={classes.mobileArrowDown}
                  onClick={handleDropdown.bind(null, 6)}
                >
                  <img
                    className={
                      openedCategory === 6 ? classes.activeDropdownArrow : ''
                    }
                    src={downArrowIcon}
                    alt="dropdown arrow"
                    width="10"
                    height="10"
                  />
                </span>
              </div>
              <div
                className={`${classes.categoryMenu} ${
                  openedCategory === 6 ? classes.activeDropdownMenu : ''
                }`}
              >
                {renderBrandedAccs}
              </div>
            </div>
          </li>
        </ul>
      </nav>
    </Fragment>
  );
};

export default NavBar;

import { Fragment, useContext, useState } from 'react';
import classes from './NavBar.module.css';

import AppContext from '../../store/context';
import downArrowIcon from '../../assets/dropdownArrow.svg';

const NavBar = () => {
  const context = useContext(AppContext);
  const [openedCategory, setOpenedCategory] = useState();

  const handleDropdown = index => {
    if (index === openedCategory) return setOpenedCategory(0);

    setOpenedCategory(index);
  };

  const renderConsoles = (
    <ul>
      <li>
        <p>PlayStation 4</p>
      </li>
      <li>
        <p>PlayStation 4 Accessories</p>
      </li>
      <li>
        <p>PlayStation 5</p>
      </li>
      <li>
        <p>PlayStation 5 Accessories</p>
      </li>
      <li>
        <p>Xbox</p>
      </li>
      <li>
        <p>Xbox Accessories</p>
      </li>
      <li>
        <p>Nintendo</p>
      </li>
      <li>
        <p>Nintendo Accessories</p>
      </li>
      <li>
        <p>Classic Consoles</p>
      </li>
    </ul>
  );
  const renderGames = (
    <ul>
      <li>
        <p>PlayStation 4 Games</p>
      </li>
      <li>
        <p>PlayStation 5 Games</p>
      </li>
      <li>
        <p>Xbox Games</p>
      </li>
      <li>
        <p>Nintendo Switch Games</p>
      </li>
      <li>
        <p>VR Games</p>
      </li>
      <li>
        <p>Gift Cards</p>
      </li>
    </ul>
  );
  const renderRobots = (
    <ul>
      <li>
        <p>Gaming Figures</p>
      </li>
      <li>
        <p>Comics</p>
      </li>
      <li>
        <p>Smart Toys</p>
      </li>
      <li>
        <p>Smart Watches</p>
      </li>
    </ul>
  );
  const renderGamingAccs = (
    <ul>
      <li>
        <p>Controllers</p>
      </li>
      <li>
        <p>Gaming Headset</p>
      </li>
      <li>
        <p>Headset</p>
      </li>
      <li>
        <p>Keyboards</p>
      </li>
      <li>
        <p>Mouse</p>
      </li>
      <li>
        <p>Wheels</p>
      </li>
      <li>
        <p>Gaming Chairs</p>
      </li>
      <li>
        <p>Microphones</p>
      </li>
      <li>
        <p>Mousepad</p>
      </li>
      <li>
        <p>Webcam</p>
      </li>
      <li>
        <p>USB-HDMI Cable</p>
      </li>
      <li>
        <p>Monitors</p>
      </li>
      <li>
        <p>Speakers</p>
      </li>
      <li>
        <p>Cooler</p>
      </li>
      <li>
        <p>...</p>
      </li>
    </ul>
  );
  const renderBrandedAccs = (
    <ul>
      <li>
        <p>Gaming Clothes</p>
      </li>
      <li>
        <p>Gaming Gifts</p>
      </li>
      <li>
        <p>Gaming Mugs</p>
      </li>
    </ul>
  );
  const renderGamingMonitors = (
    <ul>
      <li>
        <p>Sony</p>
      </li>
      <li>
        <p>Samsung</p>
      </li>
      <li>
        <p>Aoc</p>
      </li>
      <li>
        <p>Asus</p>
      </li>
      <li>
        <p>ACER</p>
      </li>
      <li>
        <p>PHILIPS</p>
      </li>
      <li>
        <p>TCL</p>
      </li>
      <li>
        <p>ViewSonic</p>
      </li>
      <li>
        <p>Lenovo</p>
      </li>
    </ul>
  );
  const renderGamingLaptops = (
    <ul>
      <li>
        <p>Laptops</p>
      </li>
      <li>
        <p>MSI</p>
      </li>
      <li>
        <p>Acer</p>
      </li>
      <li>
        <p>Lenovo</p>
      </li>
      <li>
        <p>DREAM MACHINES</p>
      </li>
      <li>
        <p>Dell</p>
      </li>
      <li>
        <p>Microsoft</p>
      </li>
    </ul>
  );
  const renderVRgadgets = (
    <ul>
      <li>
        <p>Sony VR</p>
      </li>
      <li>
        <p>Trust VR</p>
      </li>
      <li>
        <p>Oculus</p>
      </li>
      <li>
        <p>Other VR</p>
      </li>
    </ul>
  );
  const renderPCcomponents = (
    <ul>
      <li>
        <p>Game Zone Computers</p>
      </li>
      <li>
        <p>Graphics Cards</p>
      </li>
      <li>
        <p>Motherboard</p>
      </li>
      <li>
        <p>Case</p>
      </li>
      <li>
        <p>Cooler</p>
      </li>
      <li>
        <p>Power Supply</p>
      </li>
    </ul>
  );
  const renderAccessories = (
    <ul>
      <li>
        <p>Gaming Clothes</p>
      </li>
      <li>
        <p>Gaming Gifts</p>
      </li>
      <li>
        <p>Gaming Mugs</p>
      </li>
    </ul>
  );
  const renderTablets = (
    <ul>
      <li>
        <p>Lenovo</p>
      </li>
    </ul>
  );
  const renderAudioSys = (
    <ul>
      <li>
        <p>Marshall</p>
      </li>
      <li>
        <p>JBL</p>
      </li>
      <li>
        <p>Sennheiser</p>
      </li>
      <li>
        <p>Panasonic</p>
      </li>
    </ul>
  );
  const renderChangeZone = (
    <ul>
      <li>
        <p>I - Category PS4</p>
      </li>
      <li>
        <p>II - Category PS4</p>
      </li>
      <li>
        <p>III - Category PS4</p>
      </li>
      <li>
        <p>I - Category XBOX</p>
      </li>
      <li>
        <p>II - Category XBOX</p>
      </li>
      <li>
        <p>III - Category XBOX</p>
      </li>
      <li>
        <p>For Kids PS4</p>
      </li>
      <li>
        <p>For Kids XBOX</p>
      </li>
    </ul>
  );
  const renderNetworking = (
    <ul>
      <li>
        <p>Routers</p>
      </li>
      <li>
        <p>Wi-Fi Adapters</p>
      </li>
    </ul>
  );

  return (
    <Fragment>
      <nav
        className={`${classes.nav} ${context.mobileNavVis ? classes.show : ''}`}
      >
        <ul className={classes.categories}>
          <li className={classes.category}>
            <p className={classes.title}>
              Catalogue
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
              <span className={classes.arrowDown}>
                <img
                  width="10"
                  height="10"
                  src={downArrowIcon}
                  alt="dropdown arrow"
                />
              </span>
            </p>
            <div className={classes.catalogueMenuWrapper}>
              <div
                className={`${classes.catalogueMenu} ${
                  openedCategory === 1 ? classes.activeDropdownMenu : ''
                }`}
              >
                <div className={classes.menuContainer}>
                  <div>
                    <h3>Consoles</h3>
                    {renderConsoles}
                  </div>
                  <div>
                    <h3>Games</h3>
                    {renderGames}
                  </div>
                  <div>
                    <h3>Gaming Monitors & TV</h3>
                    {renderGamingMonitors}
                  </div>
                </div>

                <div className={classes.menuContainer}>
                  <div>
                    <h3>Gaming Laptops</h3>
                    {renderGamingLaptops}
                  </div>
                  <div>
                    <h3>VR Gadgets</h3>
                    {renderVRgadgets}
                  </div>
                  <div>
                    <h3>Gaming Accessories</h3>
                    {renderGamingAccs}
                  </div>
                </div>

                <div className={classes.menuContainer}>
                  <div>
                    <h3>PC Components</h3>
                    {renderPCcomponents}
                  </div>
                  <div>
                    <h3>Accessories</h3>
                    {renderAccessories}
                  </div>
                  <div>
                    <h3>Scooters</h3>
                  </div>
                  <div>
                    <h3>Robots & Toys</h3>
                    {renderRobots}
                  </div>
                </div>

                <div className={classes.menuContainer}>
                  <div>
                    <h3>Tablets</h3>
                    {renderTablets}
                  </div>
                  <div>
                    <h3>Audio Systems</h3>
                    {renderAudioSys}
                  </div>
                  <div>
                    <h3>Change Zone</h3>
                    {renderChangeZone}
                  </div>
                  <div>
                    <h3>Networking</h3>
                    {renderNetworking}
                  </div>
                </div>
              </div>
            </div>
          </li>

          <li className={classes.category}>
            <p className={classes.title}>New</p>
          </li>

          <li className={classes.category}>
            <p className={classes.title}>
              Consoles
              <span
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
              </span>
              <span className={classes.arrowDown}>
                <img
                  width="10"
                  height="10"
                  src={downArrowIcon}
                  alt="dropdown arrow"
                />
              </span>
            </p>
            <div
              className={`${classes.categoryMenu} ${
                openedCategory === 2 ? classes.activeDropdownMenu : ''
              }`}
            >
              {renderConsoles}
            </div>
          </li>

          <li className={classes.category}>
            <p className={classes.title}>
              Games
              <span
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
              </span>
              <span className={classes.arrowDown}>
                <img
                  width="10"
                  height="10"
                  src={downArrowIcon}
                  alt="dropdown arrow"
                />
              </span>
            </p>
            <div
              className={`${classes.categoryMenu} ${
                openedCategory === 3 ? classes.activeDropdownMenu : ''
              }`}
            >
              {renderGames}
            </div>
          </li>

          <li className={classes.category}>
            <p className={classes.title}>
              Robots & Games
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
              <span className={classes.arrowDown}>
                <img
                  width="10"
                  height="10"
                  src={downArrowIcon}
                  alt="dropdown arrow"
                />
              </span>
            </p>
            <div
              className={`${classes.categoryMenu} ${
                openedCategory === 4 ? classes.activeDropdownMenu : ''
              }`}
            >
              {renderRobots}
            </div>
          </li>

          <li className={classes.category}>
            <p className={classes.title}>
              Gaming Accessories
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
              <span className={classes.arrowDown}>
                <img
                  width="10"
                  height="10"
                  src={downArrowIcon}
                  alt="dropdown arrow"
                />
              </span>
            </p>
            <div
              className={`${classes.categoryMenu} ${
                openedCategory === 5 ? classes.activeDropdownMenu : ''
              }`}
            >
              {renderGamingAccs}
            </div>
          </li>

          <li className={classes.category}>
            <p className={classes.title}>
              Branded Accessories
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
              <span className={classes.arrowDown}>
                <img
                  width="10"
                  height="10"
                  src={downArrowIcon}
                  alt="dropdown arrow"
                />
              </span>
            </p>
            <div
              className={`${classes.categoryMenu} ${
                openedCategory === 6 ? classes.activeDropdownMenu : ''
              }`}
            >
              {renderBrandedAccs}
            </div>
          </li>
        </ul>
      </nav>
    </Fragment>
  );
};

export default NavBar;

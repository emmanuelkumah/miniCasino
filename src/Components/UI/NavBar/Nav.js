import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaTimes, FaBars, FaChessKnight } from "react-icons/fa";

import styles from "./Nav.module.css";

const Nav = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isMenuClicked, setIsMenuClicked] = useState(false);

  useEffect(() => {
    window.onscroll = () => {
      stickyNav();
    };
  }, []);

  //display stickyNav
  const stickyNav = () => {
    let windowHeight = window.scrollY;
    windowHeight > 200 ? setIsSticky(true) : setIsSticky(false);
  };

  //show hamburger menu
  const handleMenuIcon = () => {
    setIsMenuClicked(!isMenuClicked);
  };

  return (
    <>
      <header>
        <nav
          className={`${styles["nav__container"]} ${
            isSticky && styles["nav__container--sticky"]
          }`}>
          <Link to="/" className={styles["nav_brank_lnk"]}>
            <div className={styles["nav__brand"]}>
              <h1>Casi_Play</h1>
              <FaChessKnight className={styles["nav_brand_icon"]} />
            </div>
          </Link>
          <div className={styles["nav__menu--icon"]} onClick={handleMenuIcon}>
            {isMenuClicked ? <FaTimes /> : <FaBars />}
          </div>
          {/* Menu items  */}
          <div
            className={`${styles["nav_items--container"]} ${
              isMenuClicked && styles["nav_items-container-res"]
            }`}>
            <div className={styles["nav_menu--container"]}>
              <ul>
                <li>Home</li>
                <li>About</li>
                <li>Game</li>
              </ul>
            </div>
            <div className={styles["nav_signup--container"]}>
              <ul>
                <li className={styles["nav_login--btn"]}>
                  <Link to="/login">Login</Link>
                </li>
                <li className={styles["nav_signup--btn"]}>
                  <Link to="/signup">Sign up</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Nav;

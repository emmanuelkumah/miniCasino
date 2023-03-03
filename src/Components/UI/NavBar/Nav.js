import React, { useState, useEffect } from "react";
import { FaTimes, FaBars } from "react-icons/fa";

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
    windowHeight > 120 ? setIsSticky(true) : setIsSticky(false);
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
          <div
            className={`${styles["nav__brand"]} ${
              isSticky && styles["nav__brand--sticky"]
            }`}>
            <h1>
              Casi<span>.Play</span>
            </h1>
          </div>
          <div className={styles["nav__menu--icon"]} onClick={handleMenuIcon}>
            {isMenuClicked ? <FaTimes /> : <FaBars />}
          </div>
          {/* Menu items  */}
          <ul
            className={`${
              !isMenuClicked ? styles["nav__menu"] : styles["nav__menu--mobile"]
            } ${isSticky && styles["nav__menu--sticky"]}`}>
            <li>Home</li>
            <li>About</li>
            <li>Games</li>
          </ul>
          <ul
            className={`${styles["nav__login"]} ${
              isSticky && styles["nav__login--sticky"]
            }`}>
            <li
              className={`${styles.login} ${
                isSticky && styles["login__sticky"]
              }`}>
              Login
            </li>
            <li
              className={`${styles.signup} ${
                isSticky && styles["signup__sticky"]
              }`}>
              Sign Up
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Nav;

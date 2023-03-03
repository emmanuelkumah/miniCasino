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
          <div className={styles["nav__brand"]}>
            <h1>
              Casi<span>.Play</span>
            </h1>
          </div>
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
                <li className={styles["nav_login--btn"]}>Login</li>
                <li className={styles["nav_signup--btn"]}>Sign up</li>
              </ul>
            </div>
          </div>
          {/* <ul
            className={`${
              !isMenuClicked ? styles["nav__menu"] : styles["nav__menu--mobile"]
            } ${isSticky && styles["nav__menu--sticky"]}`}>
            <li>Home</li>
            <li>About</li>
            <li>Games</li>
          </ul>
          <ul
            className={`${
              !isMenuClicked
                ? styles["nav__login--container"]
                : styles["nav__login--container-mobile"]
            } ${isSticky && styles["nav__login--sticky"]}`}>
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
          </ul> */}
        </nav>
      </header>
    </>
  );
};

export default Nav;

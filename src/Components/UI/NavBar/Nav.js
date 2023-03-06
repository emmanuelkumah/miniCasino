import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { FaTimes, FaBars, FaChessKnight } from "react-icons/fa";

import styles from "./Nav.module.css";
import { UserContext } from "../../../context";

const Nav = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isMenuClicked, setIsMenuClicked] = useState(false);

  const { userDetails } = useContext(UserContext);

  useEffect(() => {
    window.onscroll = () => {
      stickyNav();
    };
  }, []);

  //display stickyNav
  const stickyNav = () => {
    let windowHeight = window.scrollY;
    windowHeight > 100 ? setIsSticky(true) : setIsSticky(false);
  };

  //show hamburger menu
  const handleMenuIcon = () => {
    setIsMenuClicked(!isMenuClicked);
  };

  //handleLogout
  const handleLogout = () => {
    localStorage.removeItem("userDetails");
    //redirect to home
    // navigate("/");
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
              </ul>
            </div>
            {userDetails.username ? (
              <div className={styles["username_container"]}>
                <h3>{`Hi ${userDetails.username}`}</h3>
                <button onClick={handleLogout}>Log out </button>
              </div>
            ) : (
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
            )}
          </div>
        </nav>
      </header>
    </>
  );
};

export default Nav;

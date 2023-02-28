import React from "react";
import styles from "./Nav.module.css";

const Nav = () => {
  return (
    <>
      <header>
        <nav className={styles["nav__section"]}>
          <div className={styles["nav__brand"]}>
            <h1>
              Casi<span>.Play</span>
            </h1>
          </div>

          <ul className={styles["nav__menu"]}>
            <li>Home</li>
            <li>About</li>
            <li>Games</li>
          </ul>
          <ul className={styles["nav__login"]}>
            <li className={styles.login}>Login </li>
            <li className={styles.signUp}>Sign Up</li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Nav;

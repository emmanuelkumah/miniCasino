import React from "react";
import Copyright from "./Copyright";
import styles from "./Footer.module.css";
import Winners from "./Winners";
const Footer = () => {
  return (
    <div>
      <footer className={styles["footer_bg"]}>
        <div className={styles["footer_container"]}>
          <div>
            <Winners />
          </div>
          <div>
            <Copyright />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;

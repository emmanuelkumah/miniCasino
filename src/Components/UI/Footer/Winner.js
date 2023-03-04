import React from "react";
import styles from "./Footer.module.css";
import WinnerDetails from "./WinnerDetails";
const Winner = () => {
  return (
    <div>
      <footer className={styles["footer_bg"]}>
        <div className={styles["footer_container"]}>
          <WinnerDetails />
        </div>
      </footer>
    </div>
  );
};

export default Winner;

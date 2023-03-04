import React from "react";
import Winner from "../UI/Footer/Winner";
import Hero from "../UI/Hero/Hero";
import Main from "../UI/Main/Main";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <>
      <div>
        <div className={styles["home__container"]}>
          <Hero />
        </div>
        <Main />
        <Winner />
      </div>
    </>
  );
};

export default Home;

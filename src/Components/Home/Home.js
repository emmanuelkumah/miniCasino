import React from "react";
import Footer from "../UI/Footer/Footer";
import Hero from "../UI/Hero/Hero";
import Main from "../UI/Main/Main";
import Nav from "../UI/NavBar/Nav";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <>
      <div className={styles["home__bg"]}>
        <div className={styles["home__container"]}>
          <Nav />
          <Hero />
        </div>
        <Main />
        <Footer />
      </div>
    </>
  );
};

export default Home;

import React from "react";
import Footer from "../UI/Footer/Footer";
import Hero from "../UI/Hero/Hero";
import Nav from "../UI/NavBar/Nav";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <>
      <div className={styles["home__bg"]}>
        <div className={styles["home__container"]}>
          <Nav />
          <Hero />
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Home;

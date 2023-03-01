import React from "react";
import styles from "./Hero.module.css";
import heroImg from "./hero2.png";
const Hero = () => {
  return (
    <>
      <div className={styles["split_screen"]}>
        <div className={styles["split_screen__half"]}>
          <section className={styles["hero_content"]}>
            <p>Join the elite club</p>
            <div className={styles["sub_title"]}>
              <span className={styles["small_border"]}></span>
              <span className={styles["large_border"]}></span>
              <span className={styles["small_border"]}></span>
            </div>
            <h2>
              {" "}
              <span>Play</span> the best online casino games & <span>Win</span>{" "}
              Unlimited Cash
            </h2>
            <p>Explore the world's largest selection of online games</p>
            <div className={styles["hero_btn_container"]}>
              <button className={styles["hero_btn"]}>Sign Up</button>
            </div>
          </section>
        </div>
        <div className={styles["split_screen__half"]}>
          <div className={styles["hero_img"]}>
            <img src={heroImg} alt={heroImg} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;

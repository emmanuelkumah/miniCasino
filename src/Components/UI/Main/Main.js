import React from "react";
import styles from "./Main.module.css";
import jackpot from "../../../images/jackpot.png";
import dices from "../../../images/dices.png";
import poker from "../../../images/poker.png";

const Main = () => {
  return (
    <>
      <main className={styles["main_container"]}>
        <section>
          <h3 className={styles["main_heading"]}>Explore our Popular Games</h3>

          <div className={styles["card-layout"]}>
            <div className={styles["card-layout__item"]}>
              <div className={styles["icon-container"]}>
                <img
                  src={jackpot}
                  alt="jackpot"
                  className={styles["game-icon"]}
                />
              </div>
              <article className={styles["game-details__container"]}>
                <h3> Slot Games</h3>
                <p>
                  More than 100 slot games to choose from including Starbuts,
                  Rainbow Riches and many more
                </p>
                <a href="#">Play Game</a>
              </article>
            </div>
            <div className={styles["card-layout__item"]}>
              <img src={dices} alt="dices" className={styles["game-icon"]} />
              <article className={styles["game-details__container"]}>
                <h3>Dices Games</h3>
                <p>
                  Bet on the outcome of the roll of a pair of dices, enjoy
                  popular games such as Craps, Hazards,Klondike etc{" "}
                </p>
                <a href="#">Play Game</a>
              </article>
            </div>
            <div className={styles["card-layout__item"]}>
              <img src={poker} alt="dices" className={styles["game-icon"]} />
              <article className={styles["game-details__container"]}>
                <h3>Table Games</h3>
                <p>
                  Have a seat at one of our table games and try your hand at
                  popular casino card games such as BlackJack, Ultimate Texas...
                </p>
                <a href="#">Play Game</a>
              </article>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Main;

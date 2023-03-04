import React from "react";
import winners from "../../../Utils/WinnersData";
import styles from "./Winner.module.css";
import { AiOutlineUser } from "react-icons/ai";

const displayWinners = winners.map((winner) => {
  const { id, name, location, gamePlayed, bitAmt, winAmt } = winner;

  return (
    <li key={id} className={styles["winner_lists__item"]}>
      <section className={styles["winner_details"]}>
        <div>
          <h4>
            <span className={styles["winner_icon"]}>
              <AiOutlineUser />
            </span>
            {name}
          </h4>
        </div>

        <p
          className={
            styles["winner_details--small"]
          }>{`Winner, ${location}`}</p>
      </section>
      <section className={styles["winner_details"]}>
        <h4>{gamePlayed}</h4>
        <p className={styles["winner_details--small"]}>JackPot</p>
      </section>
      <section className={styles["winner_details"]}>
        <h4>{bitAmt}</h4>
        <p className={styles["winner_details--small"]}>Bit Amount</p>
      </section>
      <section className={styles["winner_details"]}>
        <h4>{winAmt}</h4>
        <p className={styles["winner_details--small"]}>Win Amount</p>
      </section>
    </li>
  );
});
const WinnerDetails = () => {
  return (
    <>
      <section className={styles["winner_container"]}>
        <h3>Our Top Winners</h3>
        <p>Be part of our hall of fame, play and join our top winners</p>
      </section>
      <div className={styles["winner_lists__container"]}>
        <ul className={styles["winner_lists"]}>{displayWinners}</ul>
      </div>
    </>
  );
};

export default WinnerDetails;

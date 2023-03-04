import React from "react";
import styles from "./Games.module.css";

const SearchGames = () => {
  return (
    <>
      <section className={styles["games_search"]}>
        <h3>Search all Games</h3>
        <div>
          <input
            type="text"
            placeholder="Enter name of game"
            className={styles["games_input"]}
            autoFocus
          />
        </div>
      </section>
    </>
  );
};

export default SearchGames;

import React, { useContext } from "react";
import { UserContext } from "../../context";
import styles from "./Games.module.css";

const SearchGames = () => {
  const { searchGame, filterBySearch } = useContext(UserContext);
  console.log(searchGame);
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
            onChange={filterBySearch}
          />
        </div>
      </section>
    </>
  );
};

export default SearchGames;

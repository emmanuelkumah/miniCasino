import React, { useContext, useState } from "react";
import { UserContext } from "../../context";
// import { gamesLibrary } from "../../Utils/GamesData";
import SingleGame from "./SingleGame";
import styles from "./Games.module.css";
import SearchGames from "./SearchGames";

const Games = () => {
  const imagePerRow = 8;
  const [next, setNext] = useState(imagePerRow);

  //display more images
  const handleMoreImages = () => {
    setNext(next + imagePerRow);
  };
  const { games } = useContext(UserContext);

  const gameLists = games
    .slice(0, next)
    .map((game) => <SingleGame game={game} key={game.id} />);

  return (
    <>
      <SearchGames />

      <div className={styles["games_container"]}>
        <ul className={styles["card-layout"]}>{gameLists}</ul>
        {next < games.length && (
          <div className={styles["games_btn--more"]}>
            <button onClick={handleMoreImages}>See more</button>
          </div>
        )}
      </div>
    </>
  );
};

export default Games;

import React from "react";
import { useParams } from "react-router-dom";
import { gamesLibrary } from "../../Utils/GamesData";
import styles from "./Games.module.css";

const GameDetail = () => {
  const params = useParams();
  const { id } = params;

  const game = gamesLibrary.find((game) => game.name === id);

  const { name, desc, img } = game;

  return (
    <>
      <div className={styles["game_details--container"]}>
        <section>
          <h2 className={styles["game_title"]}>{name}</h2>
          <p className={styles["game_desc"]}>{desc}</p>
        </section>
        <div className={styles["game_img--container"]}>
          <img src={img} alt={img} />
        </div>
        <section className={styles["game_cta"]}>
          <p>{`Balance $100`}</p>
          <div className={styles["game_btn"]}>
            <button>{`$ 1`}</button>
            <button>{`$ 3`}</button>
            <button>{`$ 5`}</button>
            <button>{`$ 10`}</button>
          </div>
        </section>
      </div>
    </>
  );
};

export default GameDetail;

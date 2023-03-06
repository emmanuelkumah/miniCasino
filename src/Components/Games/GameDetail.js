import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { UserContext } from "../../context";
import { gamesLibrary } from "../../Utils/GamesData";
import styles from "./Games.module.css";

const GameDetail = () => {
  const [bet, setBet] = useState("");

  const params = useParams();
  const { id } = params;

  const { userDetails } = useContext(UserContext);

  //find game
  const game = gamesLibrary.find((game) => game.id === Number(id));
  const { name, desc, img } = game;

  //place bet
  const handleBet = (e) => {
    setBet("Bet placed successfully");
  };

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
          <h3>{`Balance: ${userDetails.username && "100 $"}`}</h3>
          <div className={styles["game_btn"]}>
            <button onClick={handleBet}>{`$ 1`}</button>
            <button onClick={handleBet}>{`$ 3`}</button>
            <button onClick={handleBet}>{`$ 5`}</button>
            <button onClick={handleBet}>{`$ 10`}</button>
          </div>
          <p>{bet}</p>
        </section>
      </div>
    </>
  );
};

export default GameDetail;

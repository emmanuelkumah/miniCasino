import React from "react";
import styles from "./Games.module.css";

const SingleGame = ({ game }) => {
  const { id, name, img } = game;
  return (
    <li key={id} className={styles["card-layout__item"]}>
      <div>
        <img src={img} alt={img} className={styles["card_img"]} />
        <h3>{name}</h3>
      </div>
    </li>
  );
};

export default SingleGame;

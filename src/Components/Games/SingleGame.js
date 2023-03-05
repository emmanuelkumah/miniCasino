import React from "react";
import { Link } from "react-router-dom";
import styles from "./Games.module.css";

const SingleGame = ({ game }) => {
  const { id, name, img } = game;
  return (
    <li key={id} className={styles["card-layout__item"]}>
      <Link to={`/games/${name}`} className={styles["card_link"]}>
        <div>
          <img src={img} alt={img} className={styles["card_img"]} />
          <h3 className={styles["card_name"]}>{name}</h3>
        </div>
      </Link>
    </li>
  );
};

export default SingleGame;

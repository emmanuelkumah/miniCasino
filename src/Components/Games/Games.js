import React, { useContext } from "react";
import { UserContext } from "../../context";

const Games = () => {
  const value = useContext(UserContext);
  console.log(value.username);
  return (
    <>
      <h1>Show all games</h1>
      <p>{value.username}</p>
      <p>{value.password}</p>
    </>
  );
};

export default Games;

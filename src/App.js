import React, { useState, useEffect } from "react";
import { UserContext } from "./context";
import Home from "./Components/Home/Home";
import styles from "./App.module.css";
import { Routes, Route } from "react-router-dom";
import Login from "./Components/Register/Login";
import SignUp from "./Components/Register/SignUp";
import Games from "./Components/Games/Games";
import Layout from "./Components/UI/Layout/Layout";
import GameDetail from "./Components/Games/GameDetail";
import { gamesLibrary } from "./Utils/GamesData";

function App() {
  const [userDetails, setUserDetails] = useState(() => {
    const savedItem = localStorage.getItem("userDetails");
    const parsed = JSON.parse(savedItem);
    return parsed || "";
  });
  const [games, setGames] = useState(gamesLibrary);
  const [isSignUp, setIsSignUp] = useState(false);

  useEffect(() => {
    localStorage.setItem("userDetails", JSON.stringify(userDetails));
  }, [userDetails]);

  //persit data on reload
  useEffect(() => {
    const savedItem = localStorage.getItem("userDetails");
    if (savedItem !== "") {
      setUserDetails(JSON.parse(savedItem));
    }
  }, []);

  //getForm Data
  const getFormData = (data) => {
    setUserDetails(data);
  };

  //search for a game by name
  const filterBySearch = (event) => {
    const searchTerm = event.target.value;

    const updatedGames = [...games];
    const filteredGames = updatedGames.filter((game) => {
      const { name } = game;
      return name.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1;
    });
    //update games
    setGames(filteredGames);
  };

  return (
    <UserContext.Provider
      value={{
        userDetails,
        games,
        filterBySearch,
        setIsSignUp,
        isSignUp,
      }}>
      <Layout>
        <div className={styles["app_bg"]}>
          <div className={styles["app_container"]}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route
                path="/signUp"
                element={<SignUp getFormData={getFormData} />}
              />
              <Route path="/games" element={<Games />} />
              <Route path="/games/:id" element={<GameDetail />} />
            </Routes>
          </div>
        </div>
      </Layout>
    </UserContext.Provider>
  );
}

export default App;

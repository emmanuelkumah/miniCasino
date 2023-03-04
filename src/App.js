import React, { useState, useEffect } from "react";
import { UserContext } from "./context";
import Home from "./Components/Home/Home";
import styles from "./App.module.css";
import { Routes, Route } from "react-router-dom";
import Login from "./Components/Register/Login";
import SignUp from "./Components/Register/SignUp";
import Games from "./Components/Games/Games";
import Layout from "./Components/UI/Layout/Layout";

function App() {
  const [userDetails, setUserDetails] = useState({});

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(userDetails));
  }, [userDetails]);

  //getForm Data
  const getFormData = (data) => {
    setUserDetails(data);
  };

  const value = userDetails;
  return (
    <UserContext.Provider value={value}>
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
            </Routes>
          </div>
        </div>
      </Layout>
    </UserContext.Provider>
  );
}

export default App;

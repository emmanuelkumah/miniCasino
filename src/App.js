import Home from "./Components/Home/Home";
import styles from "./App.module.css";
import { Routes, Route } from "react-router-dom";
import Login from "./Components/Register/Login";
import SignUp from "./Components/Register/SignUp";
import Nav from "./Components/UI/NavBar/Nav";

function App() {
  return (
    <>
      <div className={styles["app_bg"]}>
        <div className={styles["app_container"]}>
          <Nav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signUp" element={<SignUp />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;

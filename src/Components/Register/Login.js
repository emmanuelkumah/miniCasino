import React, { useRef, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../context";
import styles from "./Register.module.css";

const Login = () => {
  const [isLogged, setIsLoggedIn] = useState(true);
  const usernameRef = useRef();
  const passwordRef = useRef();

  //consume data
  const { userDetails } = useContext(UserContext);

  const handleLoginSubmit = (event) => {
    event.preventDefault();

    if (
      usernameRef.current.value !== userDetails.userame &&
      passwordRef.current.value !== userDetails.password
    ) {
      console.log("you have not logged in");
      setIsLoggedIn(false);
    }
    usernameRef.current.value = "";
    passwordRef.current.value = "";
  };
  return (
    <>
      <div className={styles["login_container"]}>
        <h3>Login to your account</h3>

        <form
          className={styles["form__container_login"]}
          onSubmit={handleLoginSubmit}>
          <div>
            <label htmlFor="username">Username</label>
            <input
              type="text"
              placeholder="Enter Username"
              className={styles["form_input"]}
              name="username"
              required
              ref={usernameRef}
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              className={styles["form_input"]}
              name="password"
              ref={passwordRef}
              required
            />
          </div>
          <div className={styles["btn_container"]}>
            <button className={styles["form_btn"]}>Login</button>
          </div>
          {!isLogged && (
            <div className={styles["login_error--container"]}>
              <p className={styles["login_error"]}>
                You dont have an account yet
              </p>
              <Link to="/signup" className={styles["login_signUp"]}>
                Sign Up
              </Link>
            </div>
          )}
        </form>
      </div>
    </>
  );
};

export default Login;

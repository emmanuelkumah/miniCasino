import React from "react";
import styles from "./Register.module.css";

const Login = () => {
  return (
    <>
      <div className={styles["login_container"]}>
        <h3>Login to your account</h3>

        <form className={styles["form__container_login"]}>
          <div>
            <label htmlFor="username">Username</label>
            <input
              type="text"
              placeholder="Enter Username"
              className={styles["form_input"]}
              name="username"
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              className={styles["form_input"]}
              name="password"
            />
          </div>
          <div className={styles["btn_container"]}>
            <button className={styles["form_btn"]}>Login</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;

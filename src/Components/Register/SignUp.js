import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import styles from "./Register.module.css";

const SignUp = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  //form validation rules
  const validationSchema = Yup.object().shape({
    username: Yup.string().required("Username is required"),
    password: Yup.string()
      .required("Password is required")
      .min(5, "Password must be at least 5 characters")
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{5,}$/,
        "Password should have at least  1 special char, 1 number, 1 letter."
      ),

    confirmPassword: Yup.string()
      .required("Confirm Password is required")
      .oneOf([Yup.ref("password")], "Password must match"),
  });

  const formOptions = { resolver: yupResolver(validationSchema) };
  const {
    register,
    handleSubmit,

    reset,
    formState: { errors },
  } = useForm(formOptions);

  //handle form submission
  const onFormSubmit = (data) => {
    console.log(data);
    setIsSubmitted(true);
    reset();
    // setIsSubmitted(false);
  };
  //handle errors
  const onFormError = (errors) => {
    console.log(errors);
  };

  return (
    <>
      <div className={styles["login_container"]}>
        <h3>Register For An Account </h3>
        {isSubmitted && (
          <p className={styles["success_msg"]}>Congrats! Signup successful</p>
        )}
        <form
          className={styles["form__container"]}
          onSubmit={handleSubmit(onFormSubmit, onFormError)}>
          <div>
            <label htmlFor="username">Username</label>
            <input
              type="text"
              placeholder="Enter Username"
              className={styles["form_input"]}
              name="username"
              {...register("username")}
            />
            <small className={styles["input_err"]}>
              {errors.username?.message}
            </small>
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              className={styles["form_input"]}
              name="password"
              {...register("password")}
            />
            <small className={styles["input_err"]}>
              {errors.password?.message}
            </small>
          </div>
          <div>
            <label htmlFor="confirmPassword">Password repeat</label>
            <input
              type="password"
              className={styles["form_input"]}
              name="confirmPassword"
              {...register("confirmPassword")}
            />
            <small className={styles["input_err"]}>
              {errors.confirmPassword?.message}
            </small>
          </div>
          <div>
            <label htmlFor="bdate">Birthdate</label>
            <input
              type="date"
              max="2005-01-01"
              step="1"
              className={styles["form_input"]}
              name="bdate"
            />
          </div>
          <div className={styles["btn_container"]}>
            <button className={styles["form_btn"]}>Register</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default SignUp;

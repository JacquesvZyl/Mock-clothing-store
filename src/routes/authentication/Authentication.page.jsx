import React from "react";
import styles from "./Authentication.module.scss";
import SignUpForm from "../../components/sign-up-form/SignUpForm.component";
import SignInForm from "../../components/sign-in-form/SignInForm.component";

function Authentication() {
  return (
    <div className={styles["authentication-container"]}>
      <SignInForm />
      <SignUpForm />
    </div>
  );
}

export default Authentication;

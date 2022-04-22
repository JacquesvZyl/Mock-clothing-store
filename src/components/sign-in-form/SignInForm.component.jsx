import React, { useState } from "react";

import {
  createUserDocumenFromAuth,
  signInWithEmailAndPw,
  signInWithGooglePopup,
} from "../../utils/firebase/firebase.utils";
import Button from "../button/Button.component";
import FormInput from "../form-input/FormInput.component";
import styles from "./SignInForm.module.scss";

const defaultFormDetails = { email: "", password: "" };

function SignInForm() {
  const [formDetails, setFormDetails] = useState(defaultFormDetails);

  function onChangeHandler(e) {
    const { value, name } = e.target;

    setFormDetails((prevVal) => {
      return {
        ...prevVal,
        [name]: value,
      };
    });
  }

  async function onGoogleSubmit() {
    await signInWithGooglePopup();
  }

  async function onFormSubmit(e) {
    e.preventDefault();
    try {
      const resp = await signInWithEmailAndPw(
        formDetails.email,
        formDetails.password
      );
      console.log(resp);
    } catch (e) {
      switch (e.code) {
        case "auth/user-not-found":
          alert("User not found");
          break;

        case "auth/wrong-password":
          alert("Incorrect password");
          break;

        default:
          alert("Error occured");
          break;
      }
    }
  }

  return (
    <div className={styles["sign-in-container"]}>
      <h2>Already have an account?</h2>
      <span>Sign in with your email and password </span>
      <form onSubmit={onFormSubmit}>
        <FormInput
          label="email"
          type="email"
          value={formDetails.email}
          name="email"
          onChange={onChangeHandler}
        />
        <FormInput
          label="password"
          type="password"
          value={formDetails.password}
          name="password"
          onChange={onChangeHandler}
        />
        <div className={styles["buttons-container"]}>
          <Button type="submit">sign in</Button>
          <Button type="button" buttonType="google" onClick={onGoogleSubmit}>
            Google sign in
          </Button>
        </div>
      </form>
    </div>
  );
}

export default SignInForm;

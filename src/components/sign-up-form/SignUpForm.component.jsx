import React, { useState } from "react";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumenFromAuth,
} from "../../utils/firebase/firebase.utils";
import Button from "../button/Button.component";
import FormInput from "../form-input/FormInput.component";
import styles from "./SignUpForm.module.scss";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};
function SignUpForm() {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  function handleChange(e) {
    const { value, name } = e.target;
    setFormFields((prevVal) => {
      return {
        ...prevVal,
        [name]: value,
      };
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("passwords do not match");
      return;
    }
    try {
      const response = await createAuthUserWithEmailAndPassword(
        email,
        password
      );
      await createUserDocumenFromAuth(response.user, { displayName });

      setFormFields(defaultFormFields);
    } catch (e) {
      if (e.code === "auth/email-already-in-use") {
        alert("Email already in use");
      }
      console.log(e.message);
    }
  }

  return (
    <div className={styles["sign-up-container"]}>
      <h2>Don't have an account?</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label={"Display Name"}
          type="text"
          required
          onChange={handleChange}
          name="displayName"
          value={displayName}
        />
        <FormInput
          label={"Email"}
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
        />
        <FormInput
          label={"Password"}
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
        />
        <FormInput
          label={"Confirm Password"}
          type="password"
          required
          onChange={handleChange}
          name="confirmPassword"
          value={confirmPassword}
        />
        <Button>Sign Up</Button>
      </form>
    </div>
  );
}

export default SignUpForm;

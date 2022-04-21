import React from "react";
import styles from "./Button.module.scss";

const BUTTON_TYPE_CLASSES = {
  google: "google-sign-in",
  inverted: "inverted",
};

function Button(props) {
  return (
    <button
      className={`${styles["button-container"]} ${
        styles[BUTTON_TYPE_CLASSES[props.buttonType]]
      }`}
    >
      {props.children}
    </button>
  );
}

export default Button;

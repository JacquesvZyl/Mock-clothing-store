import React from "react";
import styles from "./Button.module.scss";

const BUTTON_TYPE_CLASSES = {
  google: "google-sign-in",
  inverted: "inverted",
};

function Button({ children, buttonType, ...restProps }) {
  return (
    <button
      {...restProps}
      className={`${styles["button-container"]} ${
        styles[BUTTON_TYPE_CLASSES[buttonType]]
      }`}
    >
      {children}
    </button>
  );
}

export default Button;

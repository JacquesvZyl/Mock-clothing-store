import React from "react";

import styles from "./FormInput.module.scss";

function FormInput({ label, ...otherProps }) {
  return (
    <div className={styles.group}>
      <input className={styles["form-input"]} {...otherProps} />
      {label && (
        <label
          className={`${styles["form-input-label"]} ${
            otherProps.value.length ? styles.shrink : ""
          }`}
        >
          {label}
        </label>
      )}
    </div>
  );
}

export default FormInput;

/* 

    

*/

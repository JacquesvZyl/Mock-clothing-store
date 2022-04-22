import React from "react";
import Button from "../button/Button.component";
import styles from "./CartDropdown.module.scss";

function CartDropdown() {
  return (
    <div className={styles["cart-dropdown-container"]}>
      <div className={styles["cart-items"]}></div>
      <Button>checkout</Button>
    </div>
  );
}

export default CartDropdown;

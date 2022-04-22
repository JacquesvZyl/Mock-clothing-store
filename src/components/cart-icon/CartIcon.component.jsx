import React from "react";
import styles from "./CartIcon.module.scss";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";

function CartIcon(props) {
  return (
    <div className={styles["cart-icon-container"]} {...props}>
      <ShoppingIcon className={styles["shopping-icon"]} />
      <span className={styles["item-count"]}>12</span>
    </div>
  );
}

export default CartIcon;

import React from "react";
import styles from "./CartItem.module.scss";

function CartItem({ cartItem }) {
  const { name, quantity, imageUrl, price } = cartItem;
  return (
    <div className={styles["cart-item-container"]}>
      <img src={imageUrl} alt={name} />
      <div className={styles["item-details"]}>
        <span className={styles.name}>{name}</span>
        <span className={styles.price}>
          {quantity} X ${price}
        </span>
      </div>
    </div>
  );
}

export default CartItem;

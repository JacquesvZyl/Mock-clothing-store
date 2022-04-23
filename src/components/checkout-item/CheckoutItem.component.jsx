import React, { useContext } from "react";
import { CartContext } from "../../store/CartContext.component";
import styles from "./CheckoutItem.module.scss";

function CheckoutItem({ item }) {
  const { imageUrl, name, quantity, price } = item;
  const { removeItemQuantityFromCart, addItemToCart, removeItemFromCart } =
    useContext(CartContext);
  function removeItemQtyHandler() {
    removeItemQuantityFromCart(item);
  }

  function removeItemHandler() {
    removeItemFromCart(item);
  }
  function addItemHandler() {
    addItemToCart(item);
  }
  return (
    <div className={styles["checkout-item-container"]}>
      <div className={styles["image-container"]}>
        <img src={imageUrl} alt={name} />
      </div>
      <span className={styles.name}>{name}</span>
      <span className={styles.quantity}>
        <div className={styles.arrow} onClick={removeItemQtyHandler}>
          &#10094;
        </div>
        <span className={styles.value}>{quantity}</span>
        <div className={styles.arrow} onClick={addItemHandler}>
          &#10095;
        </div>
      </span>
      <span className={styles.price}>{price}</span>
      <div className={styles["remove-button"]} onClick={removeItemHandler}>
        &#10005;
      </div>
    </div>
  );
}

export default CheckoutItem;

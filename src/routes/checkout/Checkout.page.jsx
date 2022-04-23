import React, { useContext } from "react";
import CheckoutItem from "../../components/checkout-item/CheckoutItem.component";
import { CartContext } from "../../store/CartContext.component";
import styles from "./Checkout.module.scss";
function Checkout() {
  const { cartItems, priceTotal } = useContext(CartContext);
  return (
    <div className={styles["checkout-container"]}>
      <div className={styles["checkout-header"]}>
        <div className={styles["header-block"]}>
          <span>Product</span>
        </div>
        <div className={styles["header-block"]}>
          <span>Description</span>
        </div>
        <div className={styles["header-block"]}>
          <span>Quantity</span>
        </div>
        <div className={styles["header-block"]}>
          <span>Price</span>
        </div>
        <div className={styles["header-block"]}>
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((item) => (
        <CheckoutItem key={item.id} item={item} />
      ))}
      <span className={styles.total}>TOTAL: ${priceTotal}</span>
    </div>
  );
}

export default Checkout;

import React, { useContext } from "react";
import { CartContext } from "../../store/CartContext.component";
import Button from "../button/Button.component";
import CartItem from "../cart-item/CartItem.component";
import styles from "./CartDropdown.module.scss";

function CartDropdown() {
  const { cartItems } = useContext(CartContext);
  return (
    <div className={styles["cart-dropdown-container"]}>
      <div className={styles["cart-items"]}>
        {cartItems.map((item) => (
          <CartItem key={item.id} cartItem={item} />
        ))}
      </div>
      <Button>checkout</Button>
    </div>
  );
}

export default CartDropdown;

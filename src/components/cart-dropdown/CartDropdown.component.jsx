import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CartContext } from "../../store/CartContext.component";
import Button from "../button/Button.component";
import CartItem from "../cart-item/CartItem.component";
import styles from "./CartDropdown.module.scss";

function CartDropdown() {
  function goToCheckoutHandler() {
    navigate("/checkout");
  }

  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();
  return (
    <div className={styles["cart-dropdown-container"]}>
      <div className={styles["cart-items"]}>
        {cartItems.map((item) => (
          <CartItem key={item.id} cartItem={item} />
        ))}
      </div>

      <Button onClick={goToCheckoutHandler}>checkout</Button>
    </div>
  );
}

export default CartDropdown;

import React, { useContext } from "react";
import styles from "./CartIcon.module.scss";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { CartContext } from "../../store/CartContext.component";

function CartIcon(props) {
  const { cartCount } = useContext(CartContext);

  return (
    <div className={styles["cart-icon-container"]} {...props}>
      <ShoppingIcon className={styles["shopping-icon"]} />
      <span className={styles["item-count"]}>{cartCount}</span>
    </div>
  );
}

export default CartIcon;

import React, { useContext, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import styles from "./Navigation.module.scss";
import { ReactComponent as Crwnlogo } from "../../assets/crown.svg";
import UserContext from "../../store/AuthContext.component";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import CartIcon from "../../components/cart-icon/CartIcon.component";
import CartDropdown from "../../components/cart-dropdown/CartDropdown.component";
import { CartContext } from "../../store/CartContext.component";
function Navigation() {
  const { currentUser } = useContext(UserContext);
  const { showCart, toggleCart } = useContext(CartContext);

  return (
    <>
      <header className={styles.navigation}>
        <Link className={styles["logo-container"]} to="/">
          <Crwnlogo className={styles.logo} />
        </Link>
        <div className={styles["nav-links-container"]}>
          <Link className={styles["nav-link"]} to="/shop">
            SHOP
          </Link>
          {!currentUser ? (
            <Link className={styles["nav-link"]} to="/auth">
              SIGN IN
            </Link>
          ) : (
            <span className={styles["nav-link"]} onClick={signOutUser}>
              SIGN OUT
            </span>
          )}
          <CartIcon onClick={toggleCart} />
        </div>
        {showCart && <CartDropdown />}
      </header>
      <Outlet />
    </>
  );
}

export default Navigation;

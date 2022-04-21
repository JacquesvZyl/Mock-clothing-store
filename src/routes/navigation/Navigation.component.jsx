import React from "react";
import { Link, Outlet } from "react-router-dom";
import styles from "./Navigation.module.scss";
import { ReactComponent as Crwnlogo } from "../../assets/crown.svg";
function Navigation() {
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
          <Link className={styles["nav-link"]} to="/sign-in">
            SIGN IN
          </Link>
        </div>
      </header>
      <Outlet />
    </>
  );
}

export default Navigation;

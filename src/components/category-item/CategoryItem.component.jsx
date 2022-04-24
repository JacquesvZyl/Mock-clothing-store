import React from "react";
import { Link, useNavigate } from "react-router-dom";

import styles from "./CategoryItem.module.scss";

function CategoryItem({ category }) {
  const { imageUrl, title, route } = category;
  const navigate = useNavigate();

  function onNavigateHandler() {
    navigate(route);
  }
  return (
    <div className={styles["category-container"]} onClick={onNavigateHandler}>
      <div
        className={styles["background-image"]}
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className={styles["category-body-container"]}>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </div>
    </div>
  );
}

export default CategoryItem;

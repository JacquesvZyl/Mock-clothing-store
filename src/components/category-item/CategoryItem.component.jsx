import React from "react";

import styles from "./CategoryItem.module.scss";

function CategoryItem(props) {
  return (
    <div className={styles["category-container"]}>
      <div
        className={styles["background-image"]}
        style={{ backgroundImage: `url(${props.imageUrl})` }}
      />
      <div className={styles["category-body-container"]}>
        <h2>{props.title}</h2>
        <p>Shop Now</p>
      </div>
    </div>
  );
}

export default CategoryItem;

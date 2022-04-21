import React from "react";
import CategoryItem from "../category-item/CategoryItem.component";
import styles from "./Categories.module.scss";

function Categories(props) {
  return (
    <div className={styles["categories-container"]}>
      {props.categories.map(({ title, id, imageUrl }) => (
        <CategoryItem key={id} title={title} imageUrl={imageUrl} />
      ))}
    </div>
  );
}

export default Categories;

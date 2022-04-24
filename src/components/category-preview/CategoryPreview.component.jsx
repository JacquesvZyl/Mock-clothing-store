import React from "react";
import { Link } from "react-router-dom";
import ProductCard from "../product-card/ProductCard.component";
import styles from "./CategoryPreview.module.scss";

function CategoryPreview(props) {
  const { title, data } = props;
  console.log(props);
  return (
    <div className={styles["category-preview-container"]}>
      <h2>
        <Link to={title} className={styles.title}>
          {title.toUpperCase()}
        </Link>
      </h2>
      <div className={styles.preview}>
        {data
          .filter((_, i) => i < 4)
          .map((product) => (
            <ProductCard key={product.id} data={product} />
          ))}
      </div>
    </div>
  );
}

export default CategoryPreview;

import React from "react";
import Button from "../button/Button.component";
import styles from "./ProductCard.module.scss";

function ProductCard(props) {
  const { name, imageUrl, price } = props.data;
  console.log(props.data);
  return (
    <div className={styles["product-card-container"]}>
      <img src={imageUrl} alt={name} />
      <div className={styles.footer}>
        <span className={styles.name}>{name}</span>
        <span className={styles.price}>{price}</span>
      </div>
      <Button buttonType="inverted">ADD TO CART</Button>
    </div>
  );
}

export default ProductCard;

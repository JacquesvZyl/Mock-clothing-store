import React, { useContext } from "react";
import { CartContext } from "../../store/CartContext.component";
import Button from "../button/Button.component";
import styles from "./ProductCard.module.scss";

function ProductCard(props) {
  const { addItemToCart } = useContext(CartContext);
  const { name, imageUrl, price } = props.data;
  console.log(props.data);

  function onClickHandler() {
    addItemToCart(props.data);
  }

  return (
    <div className={styles["product-card-container"]}>
      <img src={imageUrl} alt={name} />
      <div className={styles.footer}>
        <span className={styles.name}>{name}</span>
        <span className={styles.price}>{price}</span>
      </div>
      <Button buttonType="inverted" onClick={onClickHandler}>
        ADD TO CART
      </Button>
    </div>
  );
}

export default ProductCard;

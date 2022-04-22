import React, { useContext } from "react";
import styles from "./Shop.module.scss";
import { ProductsContext } from "../../store/ProductContext.component";
import ProductCard from "../../components/product-card/ProductCard.component";

function Shop() {
  const { products } = useContext(ProductsContext);
  return (
    <div className={styles["products-container"]}>
      {products.map((product) => {
        return <ProductCard key={product.id} data={product} />;
      })}
    </div>
  );
}

export default Shop;

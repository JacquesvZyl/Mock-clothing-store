import React, { useContext, useEffect, useState } from "react";
import styles from "./Category.module.scss";
import { useParams } from "react-router-dom";
import { CategoriesContext } from "../../store/CategoriesContext.component";
import ProductCard from "../../components/product-card/ProductCard.component";

function Category() {
  const { category } = useParams();
  const { categoriesMap } = useContext(CategoriesContext);
  console.log(categoriesMap);
  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <>
      <h2 className={styles.title}>{category.toUpperCase()}</h2>
      <div className={styles["category-container"]}>
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} data={product} />
          ))}
      </div>
    </>
  );
}

export default Category;

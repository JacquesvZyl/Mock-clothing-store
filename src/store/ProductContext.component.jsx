import React, { createContext, useState } from "react";
import PRODUCTS from "../shopData.json";

export const ProductsContext = createContext({
  products: [],
});

export function ProductContextProvider(props) {
  const [products, setProducts] = useState(PRODUCTS);
  const value = { products };
  return (
    <ProductsContext.Provider value={value}>
      {props.children}
    </ProductsContext.Provider>
  );
}

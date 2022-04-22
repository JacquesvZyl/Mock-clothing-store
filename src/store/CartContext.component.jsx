import { createContext, useState } from "react";

export const CartContext = createContext({
  showCart: false,
  products: [],
  toggleCart: () => {},
});

export function CartContextProvider(props) {
  const [showCart, setCart] = useState(false);
  const [products, setProducts] = useState([]);

  function toggleCart() {
    setCart((val) => !val);
  }

  const value = {
    showCart,
    products,
    toggleCart,
  };
  return (
    <CartContext.Provider value={value}>{props.children}</CartContext.Provider>
  );
}

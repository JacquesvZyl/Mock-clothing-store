import { createContext, useEffect, useState } from "react";

function addCartItem(cartItems, productToAdd) {
  /* 
    if product is in cartItems, increase quantity
    else add product
    */

  const currentItem = cartItems.find((item) => item.id === productToAdd.id);

  if (currentItem) {
    return cartItems.map((item) =>
      item.id === productToAdd.id
        ? { ...item, quantity: (item.quantity += 1) }
        : item
    );
  }

  return [...cartItems, { ...productToAdd, quantity: 1 }];
}

export const CartContext = createContext({
  showCart: false,
  cartItems: [],
  toggleCart: () => {},
  addItemToCart: () => {},
  cartCount: 0,
});

export function CartContextProvider(props) {
  const [showCart, setCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    console.log(" useEffect in cart COntext");
    const totalItems = cartItems.reduce(
      (prevVal, currentVal) => prevVal + Number(currentVal.quantity),
      0
    );
    setCartCount(totalItems);
  }, [cartItems]);

  function addItemToCart(product) {
    setCartItems(addCartItem(cartItems, product));
  }

  function toggleCart() {
    setCart((val) => !val);
  }

  const value = {
    showCart,
    cartItems,
    cartCount,
    toggleCart,
    addItemToCart,
  };
  return (
    <CartContext.Provider value={value}>{props.children}</CartContext.Provider>
  );
}

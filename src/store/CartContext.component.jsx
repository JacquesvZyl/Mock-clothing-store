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

function removeCartQuantityItem(cartItems, productToRemove) {
  const currentItem = cartItems.find((item) => item.id === productToRemove.id);

  if (currentItem.quantity > 1) {
    return cartItems.map((item) =>
      item.id === productToRemove.id
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );
  } else {
    return cartItems.filter((item) => item.id !== productToRemove.id);
  }
}

function removeItem(cartItems, productToRemove) {
  return cartItems.filter((item) => item.id !== productToRemove.id);
}

export const CartContext = createContext({
  showCart: false,
  cartItems: [],
  toggleCart: () => {},
  addItemToCart: () => {},
  removeItemQuantityFromCart: () => {},
  removeItemFromCart: () => {},
  cartCount: 0,
  priceTotal: 0,
});

export function CartContextProvider(props) {
  const [showCart, setCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [priceTotal, setPriceTotal] = useState(0);

  useEffect(() => {
    const totalItems = cartItems.reduce(
      (prevVal, currentVal) => prevVal + Number(currentVal.quantity),
      0
    );
    setCartCount(totalItems);
  }, [cartItems]);

  useEffect(() => {
    const totalPrice = cartItems.reduce(
      (total, value) => value.quantity * value.price + total,
      0
    );
    setPriceTotal(totalPrice);
  }, [cartItems]);

  function addItemToCart(product) {
    setCartItems(addCartItem(cartItems, product));
  }

  function removeItemQuantityFromCart(product) {
    setCartItems(removeCartQuantityItem(cartItems, product));
  }

  function removeItemFromCart(product) {
    setCartItems(removeItem(cartItems, product));
  }

  function toggleCart() {
    setCart((val) => !val);
  }

  const value = {
    showCart,
    cartItems,
    priceTotal,
    cartCount,
    toggleCart,
    addItemToCart,
    removeItemQuantityFromCart,
    removeItemFromCart,
  };
  return (
    <CartContext.Provider value={value}>{props.children}</CartContext.Provider>
  );
}

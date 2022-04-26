import { Action } from "history";
import { createContext, useEffect, useReducer, useState } from "react";

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

const INITIAL_STATE = {
  showCart: false,
  cartItems: [],
  cartCount: 0,
  priceTotal: 0,
};

function reducer(state, action) {
  const { type, payload } = action;
  switch (type) {
    case "TOGGLE_CART_SHOWN": {
      return {
        ...state,
        showCart: !state.showCart,
      };
    }
    case "SET_CART_ITEMS": {
      return {
        ...state,
        ...payload,
      };
    }
    default:
      throw new Error(`Unhandled type of ${type} in cart Reducer`);
  }
}

export function CartContextProvider(props) {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  function updateCartItemsReducer(newCartItems) {
    const totalItems = newCartItems.reduce(
      (prevVal, currentVal) => prevVal + Number(currentVal.quantity),
      0
    );
    const totalPrice = newCartItems.reduce(
      (total, value) => value.quantity * value.price + total,
      0
    );

    dispatch({
      type: "SET_CART_ITEMS",
      payload: {
        cartItems: newCartItems,
        priceTotal: totalPrice,
        cartCount: totalItems,
      },
    });
  }

  function addItemToCart(product) {
    const newCartItems = addCartItem(state.cartItems, product);
    updateCartItemsReducer(newCartItems);
  }

  function removeItemQuantityFromCart(product) {
    const newCartItems = removeCartQuantityItem(state.cartItems, product);
    updateCartItemsReducer(newCartItems);
  }

  function removeItemFromCart(product) {
    const newCartItems = removeItem(state.cartItems, product);
    updateCartItemsReducer(newCartItems);
  }

  function toggleCart() {
    dispatch({ type: "TOGGLE_CART_SHOWN" });
  }

  const value = {
    showCart: state.showCart,
    cartItems: state.cartItems,
    priceTotal: state.priceTotal,
    cartCount: state.cartCount,
    toggleCart,
    addItemToCart,
    removeItemQuantityFromCart,
    removeItemFromCart,
  };
  return (
    <CartContext.Provider value={value}>{props.children}</CartContext.Provider>
  );
}

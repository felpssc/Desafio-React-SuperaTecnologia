import React, { createContext, useState } from "react";

export const CartContext = createContext({});


export function CartProvider(props) {

  const [cartItems, setCartItems] = useState([]);

  function isProductEqual(object1, object2) {
    return object1.id === object2.id;
  }

  function handleAddCartItem(item) {
    const product = {...item};
    
    const selectedProduct = cartItems.find(cartItem => isProductEqual(cartItem, product));

    if(selectedProduct !== undefined) {
      const newProduct = {...product, amount: selectedProduct.amount + 1, shipping: selectedProduct.shipping};
      const cartSplicedItems = cartItems.filter((cartItem) => cartItem !== selectedProduct);
      const newCartItems = [...cartSplicedItems, newProduct];
      setCartItems(newCartItems);
      return;
    } else {
      const product = {...item, amount: 1, shipping: 10};
      const newCartItems = [...cartItems, product];
      setCartItems(newCartItems);
    }
  }

  function handleDeleteCartItem(item) {
    const cartSplicedItems = cartItems.filter((cartItem) => cartItem !== item);
    const newCartItems = [...cartSplicedItems];
    setCartItems(newCartItems);
  }

  function handleAddAmount(item) {
    const newProduct = {...item, amount: item.amount + 1};
    const cartSplicedItems = cartItems.filter((cartItem) => cartItem !== item); 
    const newCartItems = [...cartSplicedItems, newProduct];
    setCartItems(newCartItems);   
  }

  function handleRemoveAmount(item) {
    if(item.amount === 1) {
      return;
    }
    const newProduct = {...item, amount: item.amount - 1};
    const cartSplicedItems = cartItems.filter((cartItem) => cartItem !== item); 
    const newCartItems = [...cartSplicedItems, newProduct];
    setCartItems(newCartItems);   
  }

  function isDiscountAvailable () {
    if(getTotalPrice() >= 250.00) {
      return true;
    } else {
      return false;
    }
  }

  function getTotalPrice() {
    let total = 0;
    cartItems.forEach((cartItem) => {
      total += (cartItem.amount * cartItem.price) + cartItem.shipping;
    })
    return total.toFixed(2);
  };

  function getTotalPriceWithDiscount() {
    let total = 0;
    cartItems.forEach((cartItem) => {
      total += (cartItem.amount * cartItem.price);
    })
    return total.toFixed(2);
  };

  return (
    <CartContext.Provider 
    value={{
      cartItems,
      handleAddCartItem,
      handleDeleteCartItem,
      handleAddAmount,
      handleRemoveAmount,
      getTotalPrice,
      isDiscountAvailable,
      getTotalPriceWithDiscount
    }}>
      {props.children}
    </CartContext.Provider>
  );
}
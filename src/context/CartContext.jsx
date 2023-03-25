import React, {useContext, useState} from "react";
import {getSalePrice} from "../utils/utils";
import config from "../config/config";

const CartContext = React.createContext()
const CartUpdateContext = React.createContext()

export function useCartItems() {
  return useContext(CartContext)
}
export function useCartUpdate() {
  return useContext(CartUpdateContext)
}
export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(
    cartItems.reduce((total, item) => total + getSalePrice(item), 0)
  );
  const [finalPrice, setFinalPrice] = useState(totalPrice + config.deliveries[0].cost)

  const updateCart = (cart) => {
    setCartItems(cart)
  }

  const handleAdd = (item) => {
    updateCart([...cartItems, item])
    setTotalPrice(totalPrice + getSalePrice(item))
    setFinalPrice(totalPrice + getSalePrice(item) + config.deliveries[0].cost)
  }

  const handleRemove = (item) => {
    const index = cartItems.findIndex((cartItem) => cartItem.id === item.id);
    if (index !== -1) {
      const newCartItems = [...cartItems];
      newCartItems.splice(index, 1);
      updateCart(newCartItems);
      setTotalPrice(totalPrice - getSalePrice(item))
      setFinalPrice(finalPrice - getSalePrice(item))
    }
  }

  const updateFinalPrice = (deliveryPrice) => {
    setFinalPrice(totalPrice + parseInt(deliveryPrice))
  }

  const resetCart = () => {
    setCartItems([])
    setTotalPrice(0)
    setFinalPrice(0)
  }

  return (
    <CartContext.Provider value={{cartItems, totalPrice, finalPrice}}>
      <CartUpdateContext.Provider value={{handleAdd, handleRemove, updateFinalPrice, resetCart}}>
        {children}
      </CartUpdateContext.Provider>
    </CartContext.Provider>
  )
}
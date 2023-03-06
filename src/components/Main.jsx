import React, {useState} from 'react'
import {ItemDetailContainer} from './Item/ItemDetailContainer'
import ItemListContainer from './Item/ItemListContainer'
import { Routes, Route } from 'react-router-dom';
import Landing from './Views/Landing';
import Cart from './Cart/Cart';
import {Container, Row} from "react-bootstrap";
import NavBar from "./NavBar/NavBar";



export const Main = () => {
  const [cartItems, setCartItems] = useState([]);

  const updateCart = (item) => {
    const existingItem = cartItems.find((cartItem) => cartItem.id === item.id);

    if (existingItem) {
      const updatedCartItems = cartItems.map((cartItem) =>
        cartItem.id === item.id
          ? { ...cartItem, cantidad: cartItem.cantidad + 1 }
          : cartItem
      );
      setCartItems(updatedCartItems);
    } else {
      setCartItems([...cartItems, { ...item, cantidad: 1 }]);
    }
  }


  return (
    <>
      <NavBar items={cartItems} />
      <main>
        <Routes>
          <Route exact path='/' element={<Landing />} />
          <Route exact path='/vinos' element={<ItemListContainer />} />
          <Route exact path='/vinos/:id' element={<ItemDetailContainer updateCart={updateCart}/>} />
          <Route exact path='/ofertas' element={<ItemListContainer filter={'oferta'} />} />
          <Route exact path='/cepas/:cepa' element={<ItemListContainer filter={'cepa'} />} />
          <Route exact path='/carrito' element={<Cart cartItems={cartItems} updateCart={updateCart} />}/>
        </Routes>
      </main>
    </>
  )
}
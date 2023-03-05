import React, {useState} from 'react'
import {ItemDetailContainer} from './Item/ItemDetailContainer'
import ItemListContainer from './Item/ItemListContainer'
import { Routes, Route } from 'react-router-dom';
import Landing from './Landing';
import Cart from './Cart';
import NavBar from "./NavBar/NavBar";



export const Main = () => {
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (item) => {
    setCartItems([...cartItems, item]);
  }

  return (
    <>
      <NavBar items={cartItems} />
      <main>
        <Routes>
          <Route exact path='/' element={<Landing />} />
          <Route exact path='/vinos' element={<ItemListContainer />} />
          <Route exact path='/vinos/:id' element={<ItemDetailContainer addToCart={handleAddToCart} />} />
          <Route exact path='/ofertas' element={<ItemListContainer filter={'oferta'} />} />
          <Route exact path='/cepas/:cepa' element={<ItemListContainer filter={'cepa'} />} />
          <Route exact path='/carrito' element={<Cart />}/>
        </Routes>
      </main>
    </>
  )
}
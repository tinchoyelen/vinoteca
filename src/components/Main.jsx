import React from 'react'
import {ItemDetailContainer} from './Item/ItemDetailContainer'
import ItemListContainer from './Item/ItemListContainer'
import { Routes, Route } from 'react-router-dom';
import Landing from './Views/Landing';
import Cart from './Cart/Cart';



export const Main = () => {
  return (
    <main>
      <Routes>
        <Route exact path='/' element={<Landing />} />
        <Route exact path='/vinos' element={<ItemListContainer />} />
        <Route exact path='/vinos/:id' element={<ItemDetailContainer />} />
        <Route exact path='/ofertas' element={<ItemListContainer filter={'oferta'} />} />
        <Route exact path='/cepas/:cepa' element={<ItemListContainer filter={'cepa'} />} />
        <Route exact path='/carrito' element={<Cart/>}/>
      </Routes>
    </main>
  )
}
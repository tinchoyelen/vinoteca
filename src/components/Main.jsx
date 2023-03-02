import React from 'react'
import {ItemDetailContainer} from './Item/ItemDetailContainer'
import ItemListContainer from './Item/ItemListContainer'
import { Routes, Route } from 'react-router-dom';
import Landing from './Landing';
import Contacto from "./Contacto";



export const Main = () => {
  return (
    <main>
      <Routes>
        <Route exact path='/' element={<Landing />} />
        <Route exact path='/vinos' element={<ItemListContainer />} />
        <Route exact path='/vinos/:id' element={<ItemDetailContainer />} />
        <Route exact path='/ofertas' element={<ItemListContainer filter={'oferta'} />} />
        <Route exact path='/contacto' element={<Contacto />} />
      </Routes>
    </main>
  )
}
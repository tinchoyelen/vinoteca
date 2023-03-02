import React from 'react'
import {ItemDetailContainer} from './ItemDetailContainer'
import ItemListContainer from './ItemListContainer'
import { Routes, Route } from 'react-router-dom';
import Landing from './Landing';

export const Main = () => {
  return (
    <main>
      <Routes>
        <Route exact path='/' element = {<Landing />} />
        <Route exact path ='/vinos/:id' element={<ItemDetailContainer />} />
        <Route exact path ='/vinos' element={<ItemListContainer />} />
        <Route exact path ='/category/:id' element={<ItemListContainer />} />
      </Routes>
    </main>
  )
}
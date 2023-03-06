import React from 'react'
import {ItemDetailContainer} from './Item/ItemDetailContainer'
import ItemListContainer from './Item/ItemListContainer'
import { Routes, Route } from 'react-router-dom';
import Landing from './Views/Landing';
import Cart from './Cart/Cart';
import {Container, Row} from "react-bootstrap";



export const Main = () => {
  return (
    <main className={'pt-5'}>
      <Container>
        <Row className={'justify-content-md-center'}>
          <Routes>
            <Route exact path='/' element={<Landing />} />
            <Route exact path='/vinos' element={<ItemListContainer />} />
            <Route exact path='/vinos/:id' element={<ItemDetailContainer />} />
            <Route exact path='/ofertas' element={<ItemListContainer filter={'oferta'} />} />
            <Route exact path='/cepas/:cepa' element={<ItemListContainer filter={'cepa'} />} />
            <Route exact path='/carrito' element={<Cart/>}/>
          </Routes>
        </Row>
      </Container>
    </main>
  )
}
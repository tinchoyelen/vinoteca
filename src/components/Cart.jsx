import React, {useContext} from 'react'
import { CartItem } from './CartItem'
import { CartContext } from '../context/CartContext'
import { OrderForm } from './OrderForm'


export const Cart = () => {

  const {carrito, total } = useContext(CartContext)

  return (
    carrito.length === 0 ?
    <div className='cartMensaje'>
      <p className='mensaje'>Por el momento la bolsa esta vacía</p>
    </div>
    :
    <div className='cart'>
      <div className='cartContainer'>
        <div className='cartItemContainer'>
          {carrito.map(producto => <CartItem key={producto.id} producto={producto} />)}
        </div>
        <div className='totalContainer'>
          <p className='totalTitulo'>Total</p>
          <p >${total()}</p>
        </div>
      </div>
        <OrderForm />
    </div>

  )
}






//import React from 'react'

//const Cart = () => {
    //return (
        //<div>Cart</div>
    //)
//}

//export default Cart
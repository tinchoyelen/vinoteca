import React from 'react'
import {MDBBadge, MDBIcon, MDBNavbarLink} from "mdb-react-ui-kit";

const CartWidget = ({cartItems}) => {
  return (
      <MDBNavbarLink className={'link-secondary'} href='/carrito'>
        <MDBBadge color='warning'>{ cartItems.length > 0 ? cartItems.length : ''}</MDBBadge>
          <span>
            <MDBIcon fas icon='shopping-cart'></MDBIcon>
          </span>
      </MDBNavbarLink>
  )
}

export default CartWidget
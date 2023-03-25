import React from 'react'
import {MDBBadge, MDBIcon, MDBNavbarLink} from "mdb-react-ui-kit";
import {useCartItems} from "../../context/CartContext";
import {Link} from "react-router-dom";

const CartWidget = () => {
  const cartItems = useCartItems().cartItems
  return (
      <MDBNavbarLink className={'link-secondary'} tag={Link} to={'/carrito'}>
        <MDBBadge color='warning'>{ cartItems.length > 0 ? cartItems.length : ''}</MDBBadge>
          <span>
            <MDBIcon fas icon='shopping-cart'></MDBIcon>
          </span>
      </MDBNavbarLink>
  )
}

export default CartWidget
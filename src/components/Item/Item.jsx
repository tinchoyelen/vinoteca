import React from 'react'
import SaleTag from "../Extra/SaleTag";
import {formatPrice} from "../../utils/utils";
import {Link, useParams} from "react-router-dom";
import {MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardText, MDBCardTitle, MDBCol} from "mdb-react-ui-kit";
import {useCartUpdate} from "../../context/CartContext";



export const Item = ({vino}) => {
  const { id } = useParams();
  const addToCart = useCartUpdate().handleAdd

  return (
    <MDBCol md={3}>
      <MDBCard className={'mb-3'}>
        {vino.oferta ? <SaleTag oferta_tipo={vino.oferta_tipo} /> : ''}
        <MDBCardImage variant={'top'} src= {`/imagenes/${vino.img}`} alt="imagen de vinos"/>
        <MDBCardBody>
          <MDBCardTitle> {vino.nombre}</MDBCardTitle>
          <MDBCardText>Precio: {
            formatPrice(vino.oferta
              ? vino.precio - (vino.precio * parseFloat(vino.oferta_tipo.match(/\d+/)[0]) / 100)
              : vino.precio)
          }</MDBCardText>
          <MDBCardText>Cepa: {vino.cepa}</MDBCardText>
          {
            typeof id === "undefined"
              ? <MDBBtn tag={Link} to={`/vinos/${vino.id}`}>Detalle</MDBBtn>
              : <MDBBtn onClick={() => addToCart(vino)} >Agregar al carrito</MDBBtn>
          }
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
    )
}
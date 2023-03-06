import React from 'react'
import SaleTag from "../Extra/SaleTag";
import {calculateInflation, formatPrice} from "../../utils/utils";
import {useParams} from "react-router-dom";
import {MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardText, MDBCardTitle, MDBCol} from "mdb-react-ui-kit";



export const Item = ({vino, updateCart}) => {
  const { id } = useParams();

  return (
    <MDBCol md={3}>
      <MDBCard className={'mb-3'}>
        {vino.oferta ? <SaleTag oferta_tipo={vino.oferta_tipo} /> : ''}
        <MDBCardImage variant={'top'} src= {`/imagenes/${vino.img}`} alt="imagen de vinos"/>
        <MDBCardBody>
          <MDBCardTitle> {vino.nombre}</MDBCardTitle>
          <MDBCardText>Precio: {
            formatPrice(vino.oferta
              ? calculateInflation(vino.precio - (vino.precio * parseFloat(vino.oferta_tipo.match(/\d+/)[0]) / 100))
              : calculateInflation(vino.precio))
          }</MDBCardText>
          <MDBCardText>Cepa: {vino.cepa}</MDBCardText>
          {
            typeof id === "undefined"
              ? <MDBBtn href={`/vinos/${vino.id}`}>Detalle</MDBBtn>
              : <MDBBtn onClick={() => updateCart(vino)} >Agregar al carrito</MDBBtn>
          }
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
    )
}
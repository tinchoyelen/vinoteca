import React from 'react'
import SaleTag from "../Extra/SaleTag";
import {calculateInflation, formatPrice} from "../../utils/utils";
import {Button, Card, Col} from "react-bootstrap";
import {useParams} from "react-router-dom";



export const Item = ({vino}) => {
  const { id } = useParams();

  return (
    <Col xs={3}>
      <Card className={'mb-3'}>
        {vino.oferta ? <SaleTag oferta_tipo={vino.oferta_tipo} /> : ''}
        <Card.Img variant={'top'} src= {`/imagenes/${vino.img}`} alt="imagen de vinos"/>
        <Card.Body>
          <Card.Title> {vino.nombre}</Card.Title>
          <Card.Text>Precio: {
            formatPrice(vino.oferta
              ? calculateInflation(vino.precio - (vino.precio * parseFloat(vino.oferta_tipo.match(/\d+/)[0]) / 100))
              : calculateInflation(vino.precio))
          }</Card.Text>
          <Card.Text>Cepa: {vino.cepa}</Card.Text>
          {
            typeof id === "undefined"
              ? <Button href={`/vinos/${vino.id}`}>Detalle</Button>
              : <Button /*onClick={}*/ >Agregar al carrito</Button>
          }
        </Card.Body>
      </Card>
    </Col>
    )
}
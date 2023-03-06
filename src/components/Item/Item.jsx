import React from 'react' 
import { Link } from 'react-router-dom'
import SaleTag from "../Extra/SaleTag";
import {calculateInflation, formatPrice} from "../../utils/utils";
import {Card, Col} from "react-bootstrap";



export const Item = ({id, img, nombre, precio, cepa, oferta, oferta_tipo}) => {
  return (
    <Col xs={3}>
      <Card className={'mb-3'}>
        {oferta ? <SaleTag oferta_tipo={oferta_tipo} /> : ''}
        <Card.Img variant={'top'} src= {`/imagenes/${img}`} alt="imagen de vinos"/>
        <Card.Body>
          <Card.Title> {nombre}</Card.Title>
          <Card.Text>Precio: {
            formatPrice(oferta
              ? calculateInflation(precio - (precio * parseFloat(oferta_tipo.match(/\d+/)[0]) / 100))
              : calculateInflation(precio))
          }</Card.Text>
          <p className="card-text">Cepa: {cepa}</p>
          <Link className="btn btn-primary agregar" to={`/vinos/${id}`}>
            Detalle
          </Link>
        </Card.Body>
      </Card>
    </Col>
    )
}
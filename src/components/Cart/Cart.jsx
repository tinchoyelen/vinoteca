import React from 'react'
import {Card, Col, Container, ListGroup, Row} from "react-bootstrap";

const Cart = (props) => {
    return (
      <Container>
        <Row>
            <Col xs={8}>
                <h1 className="fw-bold mb-0 text-black mt-5">Carrito</h1>
                <Card style={{ width: '18rem' }}>
                    <Card.Header>Tu pedido:</Card.Header>
                    <ListGroup variant="flush">
                        <ListGroup.Item>Cras justo odio</ListGroup.Item>
                        <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                        <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                    </ListGroup>
                </Card>
            </Col>
            <Col>

            </Col>
        </Row>
      </Container>
    )
}

export default Cart
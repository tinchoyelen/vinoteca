import React, {useEffect, useState} from 'react'
import CartWidget from '../CartWidget'
import {Container, Nav, Navbar, NavDropdown} from "react-bootstrap";


const NavBar = (props) => {
  const [cepas, setData] = useState([]);

  useEffect(() => {
      fetch('../data/data.json')
        .then(response => response.json())
        .then((jsonData) => {
          const cepas = [];
          jsonData.forEach(vino => {
            if(!cepas.includes(vino.cepa)) {
              cepas.push(vino.cepa)
            }
            setData(cepas)
          })
        })
        .catch((error) => console.log(error))
  }, []);
    return (
        <>
          <Navbar bg="light" expand="lg">
            <Container fluid>
              <Navbar.Brand href="/">LA VINOTECA</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav" className='justify-content-end'>
                <Nav>
                  <Nav.Link href="/">Home</Nav.Link>
                  <Nav.Link href="/vinos">Productos</Nav.Link>
                  <Nav.Link href="/ofertas">OnSale</Nav.Link>
                  <NavDropdown id="basic-nav-dropdown" title="Cepas">
                    {cepas.map(
                      cepa => (
                        <NavDropdown.Item key={cepa} href={'/cepas/' + cepa}>{cepa}</NavDropdown.Item>
                      )
                    )}
                  </NavDropdown>

                </Nav>
              </Navbar.Collapse>
              <CartWidget items={props.items}/>
            </Container>
          </Navbar>

        </>
      )
}

export default NavBar
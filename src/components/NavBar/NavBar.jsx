import React, {useEffect, useState} from 'react'
import CartWidget from '../Cart/CartWidget'
import {
  MDBCollapse,
  MDBContainer, MDBDropdown, MDBDropdownItem, MDBDropdownMenu, MDBDropdownToggle, MDBIcon,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarItem, MDBNavbarLink,
  MDBNavbarNav,
  MDBNavbarToggler
} from "mdb-react-ui-kit";


const NavBar = ({cartItems}) => {
  const [cepas, setData] = useState([]);
  const [showNavNoToggler, setShowNavNoToggler] = useState(false);

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
          <MDBNavbar bg="light" expand="lg">
            <MDBContainer fluid>
              <MDBNavbarBrand className={'link-dark'} href="/">LA VINOTECA</MDBNavbarBrand>
              <MDBNavbarToggler
                type='button'
                data-target='#navbarTogglerDemo01'
                aria-controls='navbarTogglerDemo01'
                aria-expanded='false'
                aria-label='Toggle navigation'
                onClick={() => setShowNavNoToggler(!showNavNoToggler)}
              >
                <MDBIcon icon='bars' fas />
              </MDBNavbarToggler>
              <MDBCollapse navbar show={showNavNoToggler}>
                <MDBNavbarNav className={'justify-content-end'}>
                  <MDBNavbarItem><MDBNavbarLink className={'link-dark'} href="/">Home</MDBNavbarLink></MDBNavbarItem>
                  <MDBNavbarItem><MDBNavbarLink className={'link-dark'} href="/vinos">Productos</MDBNavbarLink></MDBNavbarItem>
                  <MDBNavbarItem><MDBNavbarLink className={'link-dark'}href="/ofertas">OnSale</MDBNavbarLink></MDBNavbarItem>
                  <MDBNavbarItem>
                    <MDBDropdown>
                      <MDBDropdownToggle tag='div' className='nav-link link-dark' role='button'>
                        Cepas
                        <MDBDropdownMenu>
                          {cepas.map(
                            cepa => (
                              <MDBDropdownItem link key={cepa} href={'/cepas/' + cepa}>{cepa.charAt(0).toUpperCase() + cepa.slice(1)}</MDBDropdownItem>
                            )
                          )}
                        </MDBDropdownMenu>
                      </MDBDropdownToggle>
                    </MDBDropdown>
                  </MDBNavbarItem>
                  <MDBNavbarItem>
                    <CartWidget cartItems={cartItems}/>
                  </MDBNavbarItem>
                </MDBNavbarNav>
              </MDBCollapse>
            </MDBContainer>
          </MDBNavbar>
        </>
      )
}

export default NavBar
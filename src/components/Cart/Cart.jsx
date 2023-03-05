import {
    MDBBtn,
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBCol,
    MDBContainer,
    MDBIcon,
    MDBInput,
    MDBRow,
    MDBTypography,
} from "mdb-react-ui-kit";
import React, {useState} from "react";
import GoBack from "../Button/GoBack";
import {calculateInflation, formatPrice} from "../../utils/utils";

export default function Cart({ updateCart, cartItems}) {

    const [totalPrice, setTotalPrice] = useState(0);
    const handleRemove = (item) => {
        const newCartItems = cartItems.filter((cartItem) => cartItem.id !== item.id);
        updateCart(newCartItems);
        setTotalPrice(totalPrice - (item.precio * item.cantidad));
    };

    const handleAdd = (item) => {
        const newCartItems = [...cartItems];
        const index = newCartItems.findIndex((cartItem) => cartItem.id === item.id);
        newCartItems[index].cantidad += 1;
        updateCart(newCartItems);
        setTotalPrice(totalPrice + item.precio);
    };

    const handleSubtract = (item) => {
        const newCartItems = [...cartItems];
        const index = newCartItems.findIndex((cartItem) => cartItem.id === item.id);
        if (newCartItems[index].cantidad === 1) {
            handleRemove(item);
        } else {
            newCartItems[index].cantidad -= 1;
            updateCart(newCartItems);
            setTotalPrice(totalPrice - item.precio);
        }
    };
    return (
      <section className="h-100 h-custom" style={{ backgroundColor: "#eee" }}>
          <MDBContainer className="py-5 h-100">
              <MDBRow className="justify-content-center align-items-center h-100">
                  <MDBCol size="12">
                      <MDBCard className="card-registration card-registration-2" style={{ borderRadius: "15px" }}>
                          <MDBCardBody className="p-0">
                              <MDBRow className="g-0">
                                  <MDBCol lg="8">
                                      <div className="p-5">
                                          <div className="d-flex justify-content-between align-items-center mb-5">
                                              <MDBTypography tag="h1" className="fw-bold mb-0 text-black">
                                                  Carrito
                                              </MDBTypography>
                                              <MDBTypography className="mb-0 text-muted">
                                                  {cartItems.length} items
                                              </MDBTypography>
                                          </div>

                                          <hr className="my-4" />
                                          {cartItems.length > 0 ? (
                                            <div className="cart-items">
                                                {cartItems.map((item) => (
                                                  <div key={item.id}>
                                                  <MDBRow  className="mb-4 d-flex justify-content-between align-items-center">
                                                      <MDBCol md="2" lg="2" xl="2">
                                                          <MDBCardImage
                                                            src={`/imagenes/${item.img}`}
                                                            fluid className="rounded-3" alt={item.nombre} />
                                                      </MDBCol>
                                                      <MDBCol md="3" lg="3" xl="3">
                                                          <MDBTypography tag="h6" className="text-black">
                                                              {item.nombre}
                                                          </MDBTypography>
                                                          <MDBTypography tag="h6" className="text-muted mb-0">
                                                              {item.cepa}
                                                          </MDBTypography>
                                                      </MDBCol>
                                                      <MDBCol md="3" lg="3" xl="3" className="d-flex align-items-center">
                                                          <MDBBtn color="link" className="px-2" onClick={() => handleSubtract(item)}>
                                                              <MDBIcon fas icon="minus" />
                                                          </MDBBtn>

                                                          <MDBInput type="number" min="0" defaultValue={item.cantidad} size="sm" />

                                                          <MDBBtn color="link" className="px-2" onClick={() => handleAdd(item)}>
                                                              <MDBIcon fas icon="plus" />
                                                          </MDBBtn>
                                                      </MDBCol>
                                                      <MDBCol md="3" lg="2" xl="2" className="text-end">
                                                          <MDBTypography tag="h6" className="mb-0">
                                                              {
                                                                  formatPrice((item.oferta
                                                                    ? calculateInflation(item.precio - item.precio * (parseFloat(item.oferta_tipo.match(/\d+/)[0]) / 100))
                                                                    : calculateInflation(item.precio)) * item.cantidad)
                                                              }
                                                          </MDBTypography>
                                                      </MDBCol>
                                                      <MDBCol md="1" lg="1" xl="1" className="text-end">
                                                          <MDBBtn color="link" className="px-2 text-muted" onClick={() => handleRemove(item)}>
                                                              <MDBIcon fas icon="times" />
                                                          </MDBBtn>
                                                      </MDBCol>

                                                  </MDBRow>
                                                    <hr className="my-4" />
                                                  </div>
                                                ))}
                                                <p>Total Price: {totalPrice} ARS</p>
                                            </div>
                                          ) : (
                                            <p>Tu carrito está vacío</p>
                                          )}

                                          <div className="pt-5">
                                              <MDBTypography tag="h6" className="mb-0">
                                                <GoBack />
                                              </MDBTypography>
                                          </div>
                                      </div>
                                  </MDBCol>
                                  <MDBCol lg="4" className="bg-grey">
                                      <div className="p-5">
                                          <MDBTypography tag="h3" className="fw-bold mb-5 mt-2 pt-1">
                                              Summary
                                          </MDBTypography>

                                          <hr className="my-4" />

                                          <div className="d-flex justify-content-between mb-4">
                                              <MDBTypography tag="h5" className="text-uppercase">
                                                  items 3
                                              </MDBTypography>
                                              <MDBTypography tag="h5">€ 132.00</MDBTypography>
                                          </div>

                                          <MDBTypography tag="h5" className="text-uppercase mb-3">
                                              Shipping
                                          </MDBTypography>

                                          <div className="mb-4 pb-2">
                                              <select className="select p-2 rounded bg-grey" style={{ width: "100%" }}>
                                                  <option value="1">Standard-Delivery- €5.00</option>
                                                  <option value="2">Two</option>
                                                  <option value="3">Three</option>
                                                  <option value="4">Four</option>
                                              </select>
                                          </div>

                                          <MDBTypography tag="h5" className="text-uppercase mb-3">
                                              Give code
                                          </MDBTypography>

                                          <div className="mb-5">
                                              <MDBInput size="lg" label="Enter your code" />
                                          </div>

                                          <hr className="my-4" />

                                          <div className="d-flex justify-content-between mb-5">
                                              <MDBTypography tag="h5" className="text-uppercase">
                                                  Total price
                                              </MDBTypography>
                                              <MDBTypography tag="h5">€ 137.00</MDBTypography>
                                          </div>

                                          <MDBBtn color="dark" block size="lg">
                                              Register
                                          </MDBBtn>
                                      </div>
                                  </MDBCol>
                              </MDBRow>
                          </MDBCardBody>
                      </MDBCard>
                  </MDBCol>
              </MDBRow>
          </MDBContainer>
      </section>
    );
}
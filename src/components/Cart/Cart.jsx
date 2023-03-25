import {
    MDBBtn,
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBCol,
    MDBContainer,
    MDBIcon,
    MDBRow,
    MDBTypography,
} from "mdb-react-ui-kit";
import React from "react";
import GoBack from "../Button/GoBack";
import {formatPrice, getSalePrice} from "../../utils/utils";
import CartSummary from "./CartSummary";
import {useCartItems, useCartUpdate} from "../../context/CartContext";

export default function Cart() {

    const cartItems = useCartItems().cartItems
    const totalPrice = useCartItems().totalPrice
    const handleRemove = useCartUpdate().handleRemove


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
                                                  {cartItems.length === 1
                                                    ? `${cartItems.length} Item`
                                                    : `${cartItems.length} Items`}
                                              </MDBTypography>
                                          </div>

                                          <hr className="my-4" />
                                          {cartItems.length > 0 ? (
                                            <div className="cart-items">
                                                {cartItems.map((item, index) => (
                                                  <div key={index}>

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
                                                      <MDBCol md="3" lg="2" xl="2" className="text-end">
                                                          <MDBTypography tag="h6" className="mb-0">
                                                              {
                                                                  formatPrice(getSalePrice(item))
                                                              }
                                                          </MDBTypography>
                                                      </MDBCol>
                                                      <MDBCol md="1" lg="1" xl="1" className="text-end">
                                                          <MDBBtn color="link" className="px-2 text-muted" onClick={() => handleRemove(item, index)}>
                                                              <MDBIcon fas icon="times" />
                                                          </MDBBtn>
                                                      </MDBCol>
                                                    </MDBRow>
                                                    <hr className="my-4" />
                                                  </div>
                                                ))}
                                                <p>Total Price: {formatPrice(totalPrice)} </p>
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
                                  {cartItems.length > 0 ? <CartSummary /> : ""}
                              </MDBRow>
                          </MDBCardBody>
                      </MDBCard>
                  </MDBCol>
              </MDBRow>
          </MDBContainer>
      </section>
    );
}
import {MDBCol, MDBInput, MDBTypography} from "mdb-react-ui-kit";
import React from "react";
import config from "../../config/config";
import {formatPrice} from "../../utils/utils";
import {useCartItems, useCartUpdate} from "../../context/CartContext";
import CartConfirm from "./CartConfirm";

export default function CartSummary() {
  const cartItems = useCartItems().cartItems
  const totalPrice = useCartItems().totalPrice
  const finalPrice = useCartItems().finalPrice
  const updateFinalPrice = useCartUpdate().updateFinalPrice

  return (
    <MDBCol lg="4" className="bg-grey">
      <div className="p-5">
        <MDBTypography tag="h3" className="fw-bold mb-5 mt-2 pt-1">
          Detalle de la compra
        </MDBTypography>

        <hr className="my-4" />

        <div className="d-flex justify-content-between mb-4">
          <MDBTypography tag="h5" className="text-uppercase">
            {cartItems.length === 1
              ? `${cartItems.length} Item`
              : `${cartItems.length} Items`}
          </MDBTypography>
          <MDBTypography tag="h5">{formatPrice(totalPrice)}</MDBTypography>
        </div>

        <MDBTypography tag="h5" className="text-uppercase mb-3">
          Envío
        </MDBTypography>

        <div className="mb-4 pb-2">
          <select className="select p-2 rounded bg-grey" onChange={(event) => updateFinalPrice(event.target.value)} style={{ width: "100%" }}>
            {config.deliveries.map(
              (delivery, index) => {
                return <option key={index} value={delivery.cost}>{delivery.type} ({delivery.time}) - {delivery.price}</option>
              }
            )}
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
            Precio final
          </MDBTypography>
          <MDBTypography tag="h5">{formatPrice(finalPrice)}</MDBTypography>
        </div>

        <CartConfirm />
      </div>
   </MDBCol>
  )
}
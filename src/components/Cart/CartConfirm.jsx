import React, { useState } from 'react';
import {
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
} from 'mdb-react-ui-kit';
import {Link} from "react-router-dom";
import {useCartUpdate} from "../../context/CartContext";

export default function CartConfirm() {
  const [basicModal, setBasicModal] = useState(false);
  const resetCart = useCartUpdate().resetCart

  const toggleShow = () => setBasicModal(!basicModal);

  return (
    <>
      <MDBBtn color="dark" onClick={toggleShow}>Confirmar y comprar</MDBBtn>
      <MDBModal show={basicModal} setShow={setBasicModal} tabIndex='-1'>
        <MDBModalDialog>
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle>Compra realizada!</MDBModalTitle>
              <MDBBtn className='btn-close' color='none' onClick={toggleShow}></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody>Gracias por comprar con nosotros! Te enviaremos un mail con los detalles de tu compra y la factura.</MDBModalBody>

            <MDBModalFooter>
              <MDBBtn color='secondary' onClick={toggleShow}>
                Cancelar
              </MDBBtn>
              <MDBBtn tag={Link} to={'/'} onClick={resetCart}>Confirmar</MDBBtn>
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </>
  );
}
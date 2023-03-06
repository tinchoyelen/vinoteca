import React from 'react';
import {useNavigate} from 'react-router-dom';
import {MDBBtn, MDBIcon} from "mdb-react-ui-kit";

const GoBack = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(-1);
  };

  return (
    <MDBBtn tag="a" href="#!" color="dark" onClick={handleClick}>
      <MDBIcon fas icon="long-arrow-alt-left me-2" />
      Volver a la tienda
    </MDBBtn>
  );
};

export default GoBack;

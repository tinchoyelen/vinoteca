import React from 'react';
import {useNavigate} from 'react-router-dom';
import {MDBCardText, MDBIcon} from "mdb-react-ui-kit";

const GoBack = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(-1);
  };

  return (
    <MDBCardText tag="a" href="#!" className="text-body" onClick={handleClick}>
      <MDBIcon fas icon="long-arrow-alt-left me-2" /> Back
      to shop
    </MDBCardText>
  );
};

export default GoBack;

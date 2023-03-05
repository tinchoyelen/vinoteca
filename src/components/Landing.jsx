import React from 'react'


const Landing = () => {
  return <>
    <div className="alert alert-primary text-center" role="alert">
      Bienvenidos a La Vinoteca, el lugar de los mejores vinos
    </div>
    <div className="container">
      <div className="row">
        <div>
          <img src="vinoteca\public\imagenes\vinoteca.jpg" alt="La vinoteca" />
        </div>
      </div>
      <div className="row">
        <div className="col">Texto descriptivo</div>
      </div>
    </div>
  </>
}


export default Landing

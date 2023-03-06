import React from 'react'


const Landing = () => {
  return <>
    <div className="alert alert-primary text-center" role="alert">
      Bienvenidos a La Vinoteca, el lugar de los mejores vinos
    </div>
    <div className="container-fluid">
      <div className="row">
        <div className={'col'}>
          <img id={'foto-portada'} src="/imagenes/vinoteca.jpg" alt="La vinoteca" />
        </div>
      </div>
      <div className="row">
        <div className="col">Texto descriptivo</div>
      </div>
    </div>
  </>
}


export default Landing

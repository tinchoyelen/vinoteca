import React from 'react' 
import { Link } from 'react-router-dom'



export const Item = ({id, img, nombre, precio, cepa}) => {

  return (
     
    <div className="card">
        <img src= {`imagenes/${img}`} className="card-img-top mt-2" alt="imagen de vinos"/>
        <div className="card-body">
            <h5 className="card-title"> {nombre}</h5>
            <p className="card-text">Precio: {precio}</p>
            <p className="card-text">Cepa: {cepa}</p>
            
            <button data-id="${id}" className="btn btn-primary agregar">Agregar al carrito</button>
            <Link className="btn btn-primary agregar" to={`/vino/${id}`}>
                    Agregar al carrito
            </Link>
        </div>
    </div>
    )
}
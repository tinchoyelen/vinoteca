import React, {useEffect, useState} from 'react'
import {Link, useParams} from 'react-router-dom'
import SaleTag from "../SaleTag/SaleTag";

export const ItemDetailContainer = () => {

  const {id} = useParams()
  const [vino, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      fetch('../data/data.json')
        .then(response => response.json())
        .then((jsonData) => {
          setData(jsonData.find(vino => vino.id === parseInt(id)))
        })
        .catch((error) => console.log(error))
        .finally(() => {setLoading(false)})
    }, 2000)
  }, [id]);

  if (loading) {
    return <div className='loading'>Loading...</div>;
  }


  return (
    <div className="col-3">
      <div className="card">
        {vino.oferta ? <SaleTag oferta_tipo={vino.oferta_tipo} /> : ''}
        <img src= {`/imagenes/${vino.img}`} className="card-img-top mt-2" alt="imagen de vinos"/>
        <div className="card-body">
          <h5 className="card-title"> {vino.nombre}</h5>
          <p className="card-text">Precio: ${vino.precio}</p>
          <p className="card-text">Cepa: {vino.cepa}</p>
          <Link className="btn btn-primary agregar">
            Agregar al carrito
          </Link>
        </div>
      </div>
    </div>
  )
}
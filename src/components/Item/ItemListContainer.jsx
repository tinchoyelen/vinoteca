import React, { useState, useEffect } from 'react';
import {Item} from './Item';
const ItemListContainer = (props) => {

  const [vinos, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const filter = props.filter;

  useEffect(() => {
      setTimeout(() => {
        fetch('../data/data.json')
          .then(response => response.json())
          .then((jsonData) => {
            if(filter) {
              setData(jsonData.filter(vino => vino[filter] === true))
            } else {
              setData(jsonData)
            }
          })
          .catch((error) => console.log(error))
          .finally(() => {setLoading(false)})
      }, 2000)
  }, [filter]);

  if (loading) {
    return <div className='loading'>Loading...</div>;
  }

  return (
    <div className='container'>
      <div className="row">
        {vinos.map(
          vino => (
            <Item key= {vino.id} id= {vino.id} nombre = {vino.nombre} precio = {vino.precio} img = {vino.img} cepa = {vino.cepa} oferta_tipo = {vino.oferta_tipo} oferta = {vino.oferta} />
          )
        )}
      </div>
    </div>
  );
}

export default ItemListContainer






import React, { useState, useEffect } from 'react';
import {Item} from './Item';
const ItemListContainer = (props) => {

  const [vinos, setData] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    try {
      setTimeout(() => {
        fetch('../data/data.json')
          .then(response => response.json())
          .then(
            (jsonData) => {
              setData(jsonData);
              setLoading(false);
            })
      }, 3000)


    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }, []);

  if (loading) {
    return <div className='loading'>Loading...</div>;
  }

  return (
    <div className='container'>
      <div className="row">
        {vinos.map(
          vino => (
            <Item key= {vino.id} id= {vino.id} nombre = {vino.nombre} precio = {vino.precio} img = {vino.img} cepa = {vino.cepa} />
          )
        )}
      </div>
    </div>
  );
}

export default ItemListContainer






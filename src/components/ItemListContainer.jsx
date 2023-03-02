import React, { useState, useEffect } from 'react';
import {Item} from './Item';
const ItemListContainer = (props) => {

  const [vinos, setData] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    const fetchData = async () => {
      try {
        fetch('data.json')
          .then(response => response.json())
          .then(
          (jsonData) => {
            setData(jsonData);
            setLoading(false);
          })
        
        
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {vinos.map(
        vino => (
          <Item id= {vino.id} nombre = {vino.nombre} precio = {vino.precio} img = {vino.img} cepa = {vino.cepa} />
        ) 
      )}
    </div>
  );
}

export default ItemListContainer






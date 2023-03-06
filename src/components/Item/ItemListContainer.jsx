import React, { useState, useEffect } from 'react';
import {Item} from './Item';
import {useParams} from "react-router-dom";
import Loading from "../Extra/Loading";
const ItemListContainer = (props) => {

  const { cepa } = useParams();
  const [vinos, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const filter = props.filter;

  useEffect(() => {
      setTimeout(() => {
        fetch('../data/data.json')
          .then(response => response.json())
          .then((jsonData) => {
            switch (filter) {
              case 'oferta':
                setData(jsonData.filter(vino => vino[filter] === true))
                break;
              case 'cepa': {
                setData(jsonData.filter(vino => vino[filter] === cepa))
                break;
              }
              default: {
                setData(jsonData)
              }
            }
          })
          .catch((error) => console.log(error))
          .finally(() => {setLoading(false)})
      }, 2000)
  }, [filter, cepa]);

  if (loading) {
    return <Loading />
  }

  return (
    <>
      {vinos.map(
        vino => (
          <Item key={vino.id} vino={vino} />
        )
      )}
    </>
  );
}

export default ItemListContainer






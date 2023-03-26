import React, {useEffect, useState} from 'react';
import {Item} from './Item';
import {useParams} from "react-router-dom";
import Loading from "../Extra/Loading";
import {getVinos} from "../../db/db";

const ItemListContainer = (props) => {

  const { cepa } = useParams();
  const [vinos, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const filter = props.filter;

  useEffect(() => {

    getVinos()
      .then(jsonData => {
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






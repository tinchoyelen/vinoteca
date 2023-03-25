import React, {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import Loading from "../Extra/Loading";
import {Item} from "./Item";

export const ItemDetailContainer = () => {

  const {id} = useParams()
  const [vino, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
      fetch('../data/data.json')
        .then(response => response.json())
        .then((jsonData) => {
          setData(jsonData.find(vino => vino.id === parseInt(id)))
        })
        .catch((error) => console.log(error))
        .finally(() => {setLoading(false)})
  }, [id]);

  if (loading) {
    return <Loading />
  }


  return (
    <Item vino={vino} />
  )
}
import React from 'react'
import NavBar from './NavBar/NavBar'
import Button from './Button/Button'
import ItemListContainer from './ItemListContainer'

const Landing = () => {
  return <>
  <NavBar />
  <Button/>
  <ItemListContainer  greeting= "Bienvenidos a La Vinoteca, el lugar de tu vino"/> 
  
</>
}


export default Landing

import React, { useState } from 'react'

export const ItemCount = ({initial, stock, onAdd, agregar, onCantidad}) => {

const [cantidad, setCantidad] = useState(initial)

  return (
    stock ?
    <div className='contadorContainer'>
        <div className='contador'>
            <button className={cantidad === 1 ? 'disabled' : 'resta'} onClick={() => {
                const nuevaCantidad = cantidad -1
                setCantidad (cantidad - 1) 
            onCantidad &&
                onCantidad(nuevaCantidad)
                }} disabled = {cantidad === 1}>
                -
            </button>
            <div>
                <p>{cantidad}</p>
            </div>
            <button className={stock === cantidad ? 'disabled' : 'suma' } onClick={() => {
                const nuevaCantidad = cantidad + 1
                setCantidad (cantidad + 1)
            onCantidad &&
                onCantidad (nuevaCantidad)
                }} disabled = {cantidad === stock}>
                +
            </button>
        </div>
        {agregar &&
        <div>
            <button className='agregar' onClick={() => onAdd(cantidad)}>Agregar</button>
        </div>
        }
    </div>
    : 
    
    <div className='agotado'>
        <p>Agotado</p>   
    </div>
  )
}
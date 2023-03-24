import {React, useState, createContext} from 'react'

export const CartContext = createContext ({
    carrito: [],
    agregarCarrito: () => {},
    borrarDelCarrito: () => {},
    vaciarCarrito: () => {},
    cantidadProductos: () => {},
    total: () => {},
    chequearCarrito: () => {},
    actualizarCantidad: () => {}
})

const CartProvider = (props) => {

    const [carrito, setCarrito] = useState([]);
    
    const chequearCarrito = (id) => {
        return carrito.find(item => item.id === id) ? true : false;
    };

    const  agregarCarrito = (producto, cantidad) => {
        if (chequearCarrito(producto.id)) {
        setCarrito(carrito.map( item => {
            return item.id === producto.id ?
            { ...item, quantity: item.quantity + cantidad }
                :
            item;
        }));
        } else {
            setCarrito([...carrito, { ...producto, quantity: cantidad }]);
        }
    };

    const borrarDelCarrito = (id) => {
        setCarrito(carrito.filter(item => item.id !== id));
    };

    const vaciarCarrito = () => {
        setCarrito([]);
    }

    const cantidadProductos = () => {
        let cantidad = 0
        carrito.forEach( item => cantidad += item.quantity)
        return cantidad
    };

    const total = () => {
        let total = 0
        carrito.forEach(item => total += (item.quantity*item.price))
        return total        
    };

    const actualizarCantidad = (id, cantidadActualizada) => {
        const carritoActualizado = carrito.map(item => {
            if(item.id === id){
                return {...item, quantity: cantidadActualizada}
            }
            return item
        })
        setCarrito(carritoActualizado)
    };

    return (
        <CartContext.Provider value={{ carrito, vaciarCarrito, agregarCarrito, borrarDelCarrito, cantidadProductos , total, chequearCarrito, actualizarCantidad }}>
            {props.children}
        </CartContext.Provider>
        );
    };

export default CartProvider;
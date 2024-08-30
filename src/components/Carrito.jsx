import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';

const Carrito = () => {

    const {carrito, precioTotal, vaciarCarrito} = useContext(CartContext);

    const handleVaciar = () => {
        vaciarCarrito();
    }

    return (
        <div className='container'>
            <h1 className='main-title'>Carrito</h1>

            {
                carrito.map((prod, i) => (
                    <div  key={i}>
                        <h2>{prod.titulo}</h2>
                        <p>precio unitario:${prod.precio}</p>
                        <p>precio total:${prod.precio * prod.cantidad}</p>
                        <p>cant: {prod.cantidad}</p>
                    </div>
                ))
            }
            <br/>
            <br/>
        
                {
                    carrito.length > 0 &&
                    <div>
                        <h1>Total: ${precioTotal()}</h1>
                        <button className='vaciar-carrito' onClick={handleVaciar}>Vaciar carrito</button>
                        <Link to="/checkout">Finalizar Compra</Link>
                    </div>
                }
            
        </div>
    )
}

export default Carrito

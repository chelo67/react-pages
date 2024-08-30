import React, { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase/config";

const Checkout = () => {
  const [pedidoId, setPedidoId] = useState("");

  const { carrito, precioTotal, vaciarCarrito } = useContext(CartContext);

  const { register, handleSubmit } = useForm();

  const comprar = (data) => {
    const pedido = {
      cliente: data,
      productos: carrito,
      total: precioTotal(),
    };
    console.log(pedido);

    const pedidosRf = collection(db, "pedidos");

    addDoc(pedidosRf, pedido).then((doc) => {
      setPedidoId(doc.id);
      vaciarCarrito();
    });
  };

  if (pedidoId) {
    return (
      <div className="container">
        <h1 className="main-title">Gracias por tu compra</h1>
        <h3>El ID de tu pedido es: {pedidoId}</h3>
        <Link to="/">
          <button onClick={vaciarCarrito}>Volver al inicio</button>
        </Link>
      </div>
    )
  }

  return (
    <div className="container">
      <h1 className="main-title">Finalizar Compra</h1>
      <form className="formulario" onSubmit={handleSubmit(comprar)}>
        <input type="text" placeholder="Nombre" {...register("nombre")} />
        <input type="email" placeholder="Email" {...register("email")} />
        <input type="phone" placeholder="Telefono" {...register("telefono")} />
        <button className="enviar" type="submit">
          Comprar
        </button>
      </form>
    </div>
  );
};

export default Checkout;

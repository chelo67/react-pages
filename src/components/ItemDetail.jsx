import { CartContext } from "../context/CartContext";
import ItemCount from "./ItemCount";
import { useContext, useState } from "react";

const ItemDetail = ({ item }) => {
  const { carrito, agregarAlCarrito } = useContext(CartContext);

  console.log(carrito);
  const [cantidad, setCantidad] = useState(1);

  function handleSumar() {
    cantidad < item.stock && setCantidad(cantidad + 1);
  }

  function handleRestar() {
    setCantidad(cantidad > 1 ? cantidad - 1 : 1);
  }

 

  return (
    <div className="container">
      <div className="producto-detalle">
        <img src={item.imagen} />
        <div>
          <h3 className="titulo">{item.titulo}</h3>
          <p className="descripcion">{item.descripcion}</p>
          <p className="categoria">Categoria: {item.categoria}</p>
          <p className="precio">Precio: ${item.precio}</p>
          <ItemCount
            cantidad={cantidad}
            handleSumar={handleSumar}
            handleRestar={handleRestar}
            handleAgregar={() => agregarAlCarrito(item, cantidad)}
          />
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;

import ItemListContainer from "./components/ItemListContainer";
import ItemDetailCOntainer from "./components/ItemDetailContainer";
import Navbar from "./components/Navbar";
import Nosotros from "./components/Nosotros";
import "./main.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contacto from "./components/Contacto";
import Carrito from "./components/Carrito";
import { CartProvider } from "./context/CartContext";
import Checkout from "./components/Checkout";

function App() {


  return (
    <div>
      <CartProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/item/:id" element={<ItemDetailCOntainer />} />
            <Route path="/productos" element={<ItemListContainer />} />
            <Route path="/productos/:categoria" element={<ItemListContainer />}/>
            <Route path="/nosotros" element={<Nosotros />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="/carrito" element={<Carrito />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
        </BrowserRouter>
        </CartProvider>
    </div>
  );
}

export default App;

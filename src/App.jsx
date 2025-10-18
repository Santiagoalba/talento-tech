import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { ProductDetail } from "./components/ProductDetail/ProductDetail";
import { Carrito } from "./components/Carrito/Carrito";

export const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <div className="main-container">
          <Routes>
            <Route
              path="/"
              element={<ItemListContainer titulo={"Bienvenidos"} />}
            />
            <Route
              path="/category/:category"
              element={<ItemDetailContainer />}
            />
            <Route
              path="/detail/:id"
              element={<ProductDetail />}
            />
            <Route
              path="/carrito"
              element={<Carrito />}
            />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  );
}
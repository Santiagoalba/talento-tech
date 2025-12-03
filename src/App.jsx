import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { ProductDetail } from "./components/ProductDetail/ProductDetail";
import { Carrito } from "./components/Carrito/Carrito";
import { ProductFormContainer } from "./components/adminComponents/ProductFormContainer/ProductFormContainer";
import { AdminLayout } from './layouts/AdminLayout';
import { RutaProtegida } from "./components/RutaProtegida/RutaProtegida";
import { Login } from "./components/Login/Login";
import { MainLayout } from './layouts/MainLayout';

export const App = () => {
  return (
    <>
      <BrowserRouter>
        <div className="main-container">
          <Routes>
            <Route element={<MainLayout/>}>
            
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
            </Route>
            <Route path="/admin" element={<AdminLayout/>}>
              <Route index element={<Login/>}/>
              <Route path="alta-productos" element={<RutaProtegida> <ProductFormContainer/> </RutaProtegida>}/>
            </Route>
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  );
}
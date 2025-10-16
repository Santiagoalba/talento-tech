import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { ProductDetail } from "./components/ProductDetail/ProductDetail";

export const App = () => {
  return (
    <>
     <BrowserRouter>
      <div>
        <Header/>
        <Routes>
          <Route
            path="/"
            element={<ItemListContainer titulo={"Bienvenidos"}/>}
          />
          <Route
            path="/category/:category"
            element={<ItemDetailContainer/>}
          />
          <Route
            path="/detail/:id"
            element={<ProductDetail/>}
          />

        </Routes>
        <Footer/>
      </div>
     </BrowserRouter>
    </>
  );
}
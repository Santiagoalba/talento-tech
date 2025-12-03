import { useState, useEffect } from "react";
import { Item } from "../Item/Item";
import { useParams } from "react-router-dom";
import { useCartContext } from "../../context/CartContext/useCartContext";
import './ProductDetail.css';
import { getProductById } from "../../services/products";

export const ProductDetail = () => {

    const [ product, setProduct ] = useState({});

    const {id} = useParams();

    const { addItem } = useCartContext();

    const getProduct = async () => {
        // const data = await fetch("/data/products.json");
        const data = await getProductById(id);
        // const products = await data.json();

        // const foundProduct = products.find(product => product.id === id)
        if(!data) return;

        setProduct(data);

    }

    useEffect(() => {
      getProduct()  
    }, [id]);
    

  return (
    <div className="product-detail">
      <Item {...product}>
        <button onClick={() => addItem(product)}>Agregar al carrito</button>
      </Item>
    </div>
  )
}

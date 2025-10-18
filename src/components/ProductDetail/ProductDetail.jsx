import { useState, useEffect } from "react";
import { Item } from "../Item/Item";
import { useParams } from "react-router-dom";
import { useCartContext } from "../../context/CartContext/useCartContext";

export const ProductDetail = () => {

    const [ product, setProduct ] = useState({});

    const {id} = useParams();

    const { addItem } = useCartContext();

    const getProduct = async () => {
        const data = await fetch("/data/products.json");
        const products = await data.json();

        const foundProduct = products.find(product => product.id === id)
        setProduct(foundProduct);

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

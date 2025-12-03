import { useState, useEffect } from "react";
import { ItemList } from "../ItemList/ItemList";
import './ItemListContainer.css';
import { getProducts } from "../../services/products";
import { useParams } from "react-router-dom";

export const ItemListContainer = ({ titulo }) => {

    const [products, setProducts] = useState([]);
    const {category} = useParams();

    useEffect(() => {
        getProducts(category)
        .then((data) => setProducts(data))
        .catch((err) => console.log(err));
    }, [category]);


    return (
        <section className="item-list-container">
            <h1>{titulo}</h1>
            <ItemList lista={products} />
        </section>
    );
};

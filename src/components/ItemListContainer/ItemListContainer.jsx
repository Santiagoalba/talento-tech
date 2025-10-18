import { useState, useEffect } from "react";
import { ItemList } from "../ItemList/ItemList";
import './ItemListContainer.css';

export const ItemListContainer = ({ titulo }) => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("/data/products.json")
            .then((res) => {
                if (!res.ok) {
                    throw new Error("Hubo un problema al buscar products");
                }
                return res.json();
            })
            .then((data) => {
                setProducts(data);
            })
            .catch((err) => console.log(err))
    }, []);


    return (
        <section className="item-list-container">
            <h1>{titulo}</h1>
            <ItemList lista={products} />
        </section>
    );
};

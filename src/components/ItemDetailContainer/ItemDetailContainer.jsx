import { useEffect, useState } from "react";
import { ItemDetail } from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import './ItemDetailContainer.css';

export const ItemDetailContainer = () => {

  const [detail, setDetail] = useState({});

  const { category } = useParams();

  useEffect(() => {
    fetch("/data/products.json")
      .then((res) => {
        if (!res.ok) {
          throw new Error("No se encontro el producto");
        }

        return res.json();
      })
      .then((data) => {
        const found = data.filter((p) => p.category === category);
        console.log('found',found);
        if (found) {
          setDetail(found);
        } else {
          throw new Error("Producto no encontrado");
        }
      })
      .catch((err) => {
        console.log(err);
      });


  }, [category]);

  console.log(detail);

  return (
    <main className="category-container items-grid">
      { 
        detail.length ? detail.map(item => (
          <Link className="item" to={`/detail/${item.id}`} key={item.id}>
            <ItemDetail detail={item} />
          </Link>
        )) : (
          <p>Cargando...</p>
        )
      }
    </main>
  );
}
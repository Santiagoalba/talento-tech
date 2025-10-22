import { useEffect, useState } from "react";
import { ItemDetail } from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import './ItemDetailContainer.css';
import { Loader } from "./Loader";

export const ItemDetailContainer = () => {

  const [detail, setDetail] = useState({});
  const [isLoading, setIsLoading] = useState(true);


  const { category } = useParams();

  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  useEffect(() => {
    setIsLoading(true);
    delay(1000).then(
      () => fetch("/data/products.json")
    )
      .then((res) => {
        if (!res.ok) throw new Error("No se encontro el producto");
        return res.json();
      })
      .then((data) => {
        const found = data.filter((p) => p.category === category);
        if (found) {
          setDetail(found);
        } else {
          throw new Error("Producto no encontrado");
        }
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => setIsLoading(false))
  }, [category]);

  return (
    <main className={`${isLoading ? '' : 'items-grid'} category-container`}>
      {isLoading ? (
        <Loader/>
      ) : (
        detail.length ? (
          detail.map(item => (
            <Link className="item" to={`/detail/${item.id}`} key={item.id}>
              <ItemDetail detail={item} />
            </Link>
          ))
        ) : (
          <p>No se hallaron productos 😅</p>
        )
      )}
    </main>
  );
}
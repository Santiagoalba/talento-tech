import { useEffect, useState } from "react";
import { ItemDetail } from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";

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
        const found = data.find((p) => p.category === category);
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


  return (
    <main>
      {
        Object.keys(detail).length ? (
          <ItemDetail detail={detail} />
        ) : (
          <p>Cargando...</p>
        )
      }
    </main>
  );
}

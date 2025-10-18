import { Item } from "../Item/Item";
import { Link } from "react-router-dom";
import './ItemList.css';

export const ItemList = ({ lista }) => {
    return (
        <div className="items-grid">
            {
                lista.length ? (
                    lista.map((prod) => (
                        <Link className="item" to={`/detail/${prod.id}`} key={prod.id}>
                            <Item {...prod} />
                        </Link>
                    ))
                ) : (
                    <p>No hay productos</p>
                )
            }
        </div>
    );
}

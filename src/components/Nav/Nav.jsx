import { Link } from 'react-router-dom';
import './Nav.css';
import { useCartContext } from '../../context/CartContext/useCartContext';

export const Nav = () => {

    const { getTotalItems } = useCartContext();

  return (
    <nav>
        <ul>
            <li>
                <Link to={"/category/salado"}>Salado</Link>
            </li>
            <li>
                <Link to={"/category/dulce"}>Dulce</Link>
            </li>
            <li>
                <Link to={"/carrito"}>Carrito</Link>
                {getTotalItems() > 0 && (
                    <span className='in-cart'>{getTotalItems()}</span>
                )}
                <span></span>
            </li>
        </ul>
    </nav>
  )
}

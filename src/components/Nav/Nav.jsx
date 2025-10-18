import { Link } from 'react-router-dom';
import './Nav.css';
import { useCartContext } from '../../context/CartContext/useCartContext';
import { ShoppingCart } from 'lucide-react';

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


            </ul>
            <div className='nav-cart-section'>
                <Link to={"/carrito"}>
                    <ShoppingCart color='white' size={32} />
                </Link>
                {getTotalItems() > 0 && (
                    <span className='in-cart'>{getTotalItems()}</span>
                )}
            </div>
        </nav>
    )
}

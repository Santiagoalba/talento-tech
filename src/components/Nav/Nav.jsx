import { Link, NavLink } from 'react-router-dom';
import './Nav.css';
import { useCartContext } from '../../context/CartContext/useCartContext';
import { ShoppingCart } from 'lucide-react';

export const Nav = () => {

    const { getTotalItems } = useCartContext();

    return (
        <nav>
            <ul>
                <li>
                    <NavLink className={({isActive}) => isActive ? 'active' : ''} to={"/category/salado"}>Salado</NavLink>
                </li>
                <li>
                    <NavLink className={({isActive}) => isActive ? 'active' : ''} to={"/category/dulce"}>Dulce</NavLink>
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

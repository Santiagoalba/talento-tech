import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext/useCartContext";
import { Trash } from 'lucide-react';
import './Carrito.css';

export const Carrito = () => {

  const { cart, removeFromCart, removeOneFromCart, addItem, clearCart, total } = useCartContext();

  return (
    <>
      <h3>Carrito de compras</h3>

      <div className="cart">

        {

          cart.length
            ? (
              <ul className="cart-list">
                {
                  cart.map(item => (
                    <div key={item.id} className="cart-item">
                      <div className="cart-item-information">
                        <div className="img-container">
                          <img src={item.imageUrl} alt={item.description} />
                        </div>
                        <p>{item.name}</p>
                      </div>
                      <div className="cart-utility">
                        <button onClick={() => removeOneFromCart(item.id)}>-</button>
                        <span>{item.quantity}</span>
                        <button onClick={() => addItem(item)}>+</button>
                        <span className="price">{item.price * item.quantity}</span>
                        <Trash onClick={() => removeFromCart(item.id)} className="delete" size={20} />
                      </div>
                    </div>
                  ))

                }
                <div className="total">
                  <span className="total-price">Total: {total}</span>
                  <button className="remove-button" onClick={clearCart}>Vaciar Carrito</button>
                </div>
              </ul>


            )
            : (
              <>
                <p>No se hallaron productos en su carrito de compras 😅</p>
                <p>Regrese a la <Link to={'/'}>Tienda</Link> para agregar productos 😊</p>
              </>
            )
        }
        
      </div>
    </>
  )
}

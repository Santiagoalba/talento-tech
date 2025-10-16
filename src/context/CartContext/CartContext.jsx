import { createContext, useState } from "react";

export const CartContext = createContext()

export const CartProvider = ({children}) => {

    const [ cart, setCart ] = useState([]);

    const exists = (id) => {
        cart.some(item => item.id === id);
    }

    const addItem = (item) => {

        if(exists(item.id)) return;

        setCart([...cart, item]);
        console.log(`${item.name} agregado`);
    }

    const clearCart = () => {
        setCart([]);
    }

    const getTotalItems = () => {
        if(cart.length) {
            return cart.length;
        }
    }

    return <CartContext.Provider value={{addItem, clearCart, getTotalItems}}>
        { children }
    </CartContext.Provider>
}
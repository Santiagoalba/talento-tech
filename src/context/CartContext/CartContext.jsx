import { createContext, useState } from "react";

export const CartContext = createContext();

const storedCart = window.localStorage.getItem('cart');
const cartInitialValue = storedCart ? JSON.parse(window.localStorage.getItem('cart')) : [];

export const CartProvider = ({children}) => {

    console.log(cartInitialValue);

    const [ cart, setCart ] = useState(cartInitialValue);

    console.log(cart);

    const exists = (id) => {
       return cart.some(item => item.id === id);
    }

    const addItem = (item) => {

        const {id, name, price, imageUrl } = item;
 
        if(exists(item.id)) {
            const updatedCart = cart.map(item => 
                item.id === id ? (
                    {
                        ...item,
                        quantity: item.quantity +1
                    }
                ) : (
                    item
                )
            );
            window.localStorage.setItem('cart', JSON.stringify(updatedCart));
            setCart(updatedCart);
            return;
        };
        
        
        setCart((prev) => {
            const newCart = [...prev, {
                id,
                name,
                price,
                imageUrl,
                quantity: 1
            }];        

            window.localStorage.setItem('cart', JSON.stringify(newCart));
            return newCart;
        });

        console.log(`${item.name} agregado`);
    }

    const clearCart = () => {
        window.localStorage.setItem('cart', null);
        setCart([]);
    }

    const getTotalItems = () => {
        if(cart.length) {
            return cart.length;
        }
    }

    const removeFromCart = (id) => {
       setCart((prev) => {
            const newCart = prev.filter(item => item.id !== id);
            localStorage.setItem('cart', JSON.stringify(newCart));
            return newCart;
       }); 
    }
 

    const removeOneFromCart = (id) => {
        const newCart = cart.map(item => {
            if(item.id === id) {
                console.log(item);
            }

            if(item.id !== id) {
                return item;
            } else if (item.quantity > 1) {
                return { ...item, quantity: item.quantity - 1}
            }

            removeFromCart(id);
        })
        localStorage.setItem('cart', JSON.stringify(newCart));
        setCart(newCart);
    }

    const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);


    return <CartContext.Provider value={{cart, addItem, clearCart, getTotalItems, removeFromCart, removeOneFromCart, total}}>
        { children }
    </CartContext.Provider>
}
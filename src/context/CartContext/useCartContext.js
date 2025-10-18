
import { useContext } from "react";
import { CartContext } from "./CartContext";

export const useCartContext = () => {

    const {
        cart,
        addItem,
        clearCart,
        getTotalItems,
        removeFromCart,
        removeOneFromCart,
        addOneToCart,
        total
    } = useContext(CartContext);

    return {
        cart,
        addItem,
        clearCart,
        getTotalItems,
        removeFromCart,
        addOneToCart,
        removeOneFromCart,
        total
    }
}

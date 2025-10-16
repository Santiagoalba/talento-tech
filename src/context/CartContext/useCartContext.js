
import { useContext } from "react";
import { CartContext } from "./CartContext";

export const useCartContext = () => {

    const { addItem, clearCart, getTotalItems } = useContext(CartContext);

    return {
        addItem,
        clearCart,
        getTotalItems,
    }
}

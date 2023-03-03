import { useContext } from "react";
import { CartContext } from "../context/cart";

export function useCart () {
    const contextCart = useContext(CartContext)

    if(contextCart === undefined) {
        throw new Error('El componente no se encuentra envuelto por el provider')
    }

    return contextCart
}
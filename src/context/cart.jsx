import { createContext, useReducer } from "react";
import { cartInitialState, cartReducer, TYPES } from "../reducer/cartReducer";

// Creacion del contexto
export const CartContext = createContext()


function useCartReducer () {
    const [state, dispatch] = useReducer(cartReducer, cartInitialState)

    const addToCart = (product) => dispatch({
        type: TYPES.ADD_TO_CART,
        payload: product

    })

    const removeFromCart = (product) => dispatch({
        type: TYPES.REMOVE_FROM_CART,
        payload: product
    })

    const clearCart = () => dispatch({
        type: TYPES.CLEAR_CART
    })

    return { state, addToCart, removeFromCart, clearCart }
}



// Creacion del Provider
export function CartProvider({ children }) {

    const { addToCart, removeFromCart, clearCart, state } = useCartReducer()

    return (
        <CartContext.Provider value={{
            cart: state,
            addToCart,
            clearCart,
            removeFromCart
        }}
        >
            {children}
        </CartContext.Provider>
    )
}
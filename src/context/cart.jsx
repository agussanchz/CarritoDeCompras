import { createContext, useState } from "react";

// Creacion del contexto
export const CartContext = createContext()

// Creacion del Provider
export function CartProvider({ children }) {
    const [cart, setCart] = useState([])

    const addToCart = (product) => {
        // Check si el producto esta en el carrito
        const productInCartIndex = cart.findIndex((item) => item.id === product.id)

        if (productInCartIndex >= 0) {
            const newCart = structuredClone(cart)
            newCart[productInCartIndex].quantity += 1
            return setCart(newCart)
        }

        // Producto no está en el carrito
        setCart(prevState => ([
            ...prevState,
            {
                ...product,
                quantity: 1
            }
        ]))
    }

    const removeFromCart = (product) => {
        setCart(prevState => prevState.filter((item) => item.id !== product.id))
    }

    const clearCart = () => {
        setCart([])
    }

    return (
        <CartContext.Provider value={{
            cart,
            addToCart,
            clearCart,
            removeFromCart
        }}
        >
            {children}
        </CartContext.Provider>
    )
}
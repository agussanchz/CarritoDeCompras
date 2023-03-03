export const cartInitialState = []

export const TYPES = {
    ADD_TO_CART: 'ADD_TO_CART',
    REMOVE_FROM_CART: 'REMOVE_FROM_CART',
    CLEAR_CART: 'CLEAR_CART'

}

export const cartReducer = (state, action) => {
    const { type: actionType, payload: actionPayload } = action

    switch (actionType) {
        // Agregar al carrito y su cantidad
        case TYPES.ADD_TO_CART: {
            // Check si el producto esta en el carrito
            const { id } = actionPayload
            const productInCartIndex = state.findIndex((item) => item.id === id)

            if (productInCartIndex >= 0) {
                const newState = state.map((item) =>{
                    if(item.id === id){
                        return {
                            ...item,
                            quantity: item.quantity +1 
                        }
                    }

                    return item
                })

                return newState
            }

            // Producto no está en el carrito
            return [
                ...state,
                {
                    ...actionPayload, //el producto
                    quantity: 1
                }
            ]
        }

        // Eliminar producto del carrito
        case TYPES.REMOVE_FROM_CART: {
            const { id } = actionPayload
            return state.filter((item) => item.id !== id)
        }

        // Vaciar carrito 
        case TYPES.CLEAR_CART: {
            return cartInitialState
        }
    }

    return state
}

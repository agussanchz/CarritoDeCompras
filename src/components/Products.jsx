import { useCart } from "../hook/useCart"
import { AddToCartIcon, RemoveFromCartIcon } from "./Icons"

export function Products({ products }) {

    const { addToCart, cart, removeFromCart } = useCart()

    const checkProductInCart = (product) => {
        return cart.some((item) => item.id === product.id)
    }

    return (
        <main className="mt-4">
            <ul className="flex justify-center flex-wrap gap-4 items-center">
                {products.map((product) => {
                    const isProductInCart = checkProductInCart(product)
                    return (
                        <li key={product.id} className="w-60 h-72 rounded flex justify-center flex-col items-center bg-gray-400 text-indigo-50 gap-1">
                            <strong>{product.title}</strong>
                            <img src={product.thumbnail} alt={product.title} className='w-44 h-44' />
                            <p>${product.price}</p>
                            <div>
                                <button
                                    className="h-8 w-8 flex justify-center items-center rounded"
                                    style={{ backgroundColor: isProductInCart ? 'red' : '#09f' }}
                                    onClick={() => {
                                        isProductInCart
                                            ? removeFromCart(product)
                                            : addToCart(product)
                                    }}
                                >
                                    {
                                        isProductInCart
                                            ? <RemoveFromCartIcon />
                                            : <AddToCartIcon />
                                    }
                                </button>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </main>
    )

}
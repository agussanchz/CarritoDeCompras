import { useCart } from "../hook/useCart"

export function Products({ products }) {

    const { addToCart, cart, removeFromCart } = useCart()

    const checkProductInCart = (product) => {
        return cart.some((item) => item.id === product.id)
    }

    return (
        <main className="mt-4 font-poppins text-gray-400">
            <ul className="flex justify-center flex-wrap gap-4 items-center">
                {products.map((product) => {
                    const isProductInCart = checkProductInCart(product)
                    return (
                        <li key={product.id} className="p-4 rounded-xl flex justify-center flex-col items-center bg-secondary-0 gap-4">
                            <strong className="text-2xl">{product.title}</strong>
                            <img src={product.thumbnail} alt={product.title} className=' w-60 h-64' />
                            <p>${product.price}</p>
                            <div>
                                <button
                                    onClick={() => {
                                        isProductInCart
                                            ? removeFromCart(product)
                                            : addToCart(product)
                                    }}
                                >
                                    {
                                        isProductInCart
                                            ? <h2 className="text-white h-9 w-full p-2 rounded-md flex justify-center items-center  bg-red-400">Eliminar del carrito</h2>
                                            : <h2 className="text-white h-9 w-full p-2 rounded-md flex justify-center items-center  bg-blue-400">Agregar al carrito</h2>
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
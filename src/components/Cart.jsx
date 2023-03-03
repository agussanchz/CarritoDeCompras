import { useId } from "react"
import { CartIcon, ClearCartIcon } from "./Icons"
import './Cart.css'
import { useCart } from "../hook/useCart"

function CartItem({ title, thumbnail, quantity, price, addToCart }) {
    return(
        <li className='w-40 h-52 rounded flex flex-col justify-center gap-2 bg-gray-400 my-10'>
            <img src={thumbnail} alt={title} className='w-full aspect-video' />
            <div className='flex justify-center'>
                <strong>{title}</strong>
            </div>
            <div className='flex justify-center'>
                <strong>${price}</strong>
            </div>
            <footer className='flex justify-center items-center gap-1 '>
                <small>
                    Cantidad: {quantity}
                </small>
                <button
                    className='w-4 bg-gray-500 rounded'
                    onClick={addToCart}
                >
                    +
                </button>
            </footer>
        </li>
    )
}


export function Cart() {
    const cartCheckboxId = useId()
    const { cart, clearCart, addToCart } = useCart()

    return (
        <>
            <label htmlFor={cartCheckboxId} className='cart-button flex justify-center items-center absolute right-2 top-8 w-8 bg-gray-400 rounded-full h-8 p-1 cursor-pointer z-50' >
                <CartIcon />
            </label>
            <input type="checkbox" id={cartCheckboxId} hidden />

            <aside className='cart bg-gray-500 hidden p-8 fixed right-0 top-0 w-52 text-indigo-50'>
                <ul>
                    {cart.map((product) => (
                      <CartItem 
                        key={product.id} 
                        addToCart={() => addToCart(product)}
                        {...product}
                      />
                    ))}

                </ul>

                <button
                    className='flex justify-center items-center w-full'
                    onClick={clearCart}
                >
                    {cart.length === 0 ? <p className='mt-10'>Carrito vacio :(</p> : <ClearCartIcon />}

                </button>
            </aside>
        </>
    )
}
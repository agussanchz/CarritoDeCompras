import { useId } from "react"
import { CartIcon, ClearCartIcon } from "./Icons"
import './Cart.css'
import { useCart } from "../hook/useCart"

function CartItem({ title, thumbnail, quantity, price, addToCart }) {
    return(
        <li className="p-4 rounded-xl flex justify-center flex-col items-center bg-card-0 gap-4 my-10">
            <img src={thumbnail} alt={title} className='w-full aspect-video' />
            <div className='flex justify-center'>
                <strong className="text-indigo-50">{title}</strong>
            </div>
            <div className='flex justify-center'>
                <strong>${price}</strong>
            </div>
            <footer className='flex justify-center items-center gap-1 '>
                <small>
                    Cantidad: {quantity}
                </small>
                <button
                    className='w-4 bg-gray-300 rounded text-black'
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
            <label 
                htmlFor={cartCheckboxId} 
                className='cart-button flex justify-center items-center absolute right-4 top-7 w-10 h-9 bg-card-0 rounded-full p-2 cursor-pointer z-50 text-indigo-50' 
            >
                <CartIcon />
            </label>
            <input type="checkbox" id={cartCheckboxId} hidden />

            <aside className='cart bg-secondary-0 hidden p-8 fixed right-0 top-0 w-64 text-indigo-50'>
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
                    {cart.length === 0 ? <p className='mt-14 font-poppins text-indigo-50'>Carrito vacio :(</p> : <ClearCartIcon />}

                </button>
            </aside>
        </>
    )
}
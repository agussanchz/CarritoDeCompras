import { AddToCartIcon } from "./Icons"

export function Products({ products }) {

    return (
        <main className="mt-4">
            <ul className="flex justify-center flex-wrap gap-4 items-center">
                {products.map((product) => (
                    <li key={product.id} className="w-60 h-72 rounded flex justify-center flex-col items-center bg-gray-400 text-indigo-50 gap-1">
                        <strong>{product.title}</strong>
                        <img src={product.thumbnail} alt={product.title} className='w-44 h-44' />
                        <p>${product.price}</p>
                        <button className="bg-gray-500 h-8 w-8 flex justify-center items-center rounded">
                            <AddToCartIcon />
                        </button>
                    </li>
                ))}
            </ul>
        </main>
    )

}
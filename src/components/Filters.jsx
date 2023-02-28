import { useState, useId } from "react"

export function Filters({ onChangeFilters }){
    const [minPrice, setMinPrice] = useState(0)
    const minPriceFilterId = useId()
    const categoryFilterId = useId()

    const handleChange = (event) =>{
        setMinPrice(event.target.value)
        onChangeFilters(prevState => ({
            ...prevState,
            minPrice: event.target.value
        }))
    }

    const handleChangeCategory = (event) =>{
        onChangeFilters(prevState => ({
            ...prevState,
            category: event.target.value
        }))

    }


    return(
        <section className="flex flex-col justify-center items-center gap-4 md:flex-row md:justify-around md:gap-0">
            <div className="flex gap-2">
                <label htmlFor={minPriceFilterId}>Precio a partir de:</label>
                <input type="range" id={minPriceFilterId} min='0' max='1000' onChange={handleChange}/>
                <span>${minPrice}</span>
            </div>
   
            <div className="flex gap-2">
                <label htmlFor={categoryFilterId}>Categoria</label>
                <select id={categoryFilterId} className="bg-gray-400 text-indigo-50" onChange={handleChangeCategory}>
                    <option value="all">Todas</option>
                    <option value="laptops">Notebook</option>
                    <option value="smartphones">Celulares</option>
                    <option value="skincare">Skincare</option>
                    <option value="fragrances">Perfumes</option>
                    <option value="home-decoration">Decoracion para el hogar</option>
                </select>
            </div>
        </section>
    )
}
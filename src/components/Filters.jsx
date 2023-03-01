import { useFilter } from "../hook/useFilter"
import { useState, useId } from "react"

export function Filters() {
    const { setFilters, filters } = useFilter()
    const minPriceFilterId = useId()
    const categoryFilterId = useId()

    const handleChange = (event) => {
        setFilters(prevState => ({
            ...prevState,
            minPrice: event.target.value
        }))
    }

    const handleChangeCategory = (event) => {
        setFilters(prevState => ({
            ...prevState,
            category: event.target.value
        }))

    }


    return (
        <section className="flex flex-col justify-center items-center gap-4 md:flex-row md:justify-around md:gap-0">
            <div className="flex gap-2">
                <label htmlFor={minPriceFilterId}>Precio a partir de:</label>
                <input type="range" id={minPriceFilterId} min='0' max='1000' onChange={handleChange} value={filters.minPrice} />
                <span>${filters.minPrice}</span>
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
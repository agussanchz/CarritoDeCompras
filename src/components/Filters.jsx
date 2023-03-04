import { useFilter } from "../hook/useFilter"
import { useId } from "react"

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
        <section className="flex flex-col items-center gap-4 p-4 text-gray-400  font-poppins md:flex-row md:justify-around md:gap-0">
            <div className="flex justify-center items-center gap-2 ">
                <label htmlFor={minPriceFilterId} >
                    Precio a partir de:
                </label>
                <input
                    className="appearance-none h-2 rounded-xl bg-card-0"
                    type="range"
                    id={minPriceFilterId}
                    min='0'
                    max='1000'
                    onChange={handleChange}
                    value={filters.minPrice}
                />
                <span className="text-indigo-50">${filters.minPrice}</span>
            </div>

            <div className=" h-9 flex justify-center items-center gap-2 bg-secondary-0 rounded-md p-2">
                <label className="" htmlFor={categoryFilterId}>Categorias</label>
                <select
                    id={categoryFilterId}
                    className="bg-card-0 text-indigo-50"
                    onChange={handleChangeCategory}
                >
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
/* eslint-disable react/prop-types */
import "./Filters.css"
import { useId, useContext } from "react"
import { FiltersContext } from "../context/filters";

export function Filters(){
    const {filters, setFilters} = useContext(FiltersContext)
    const minPriceFilterId=useId();
    const categoryFilterId=useId();

    const handleRangeChange=(e)=>{
        const newFilteredPrice=e.target.value
        setFilters(prevState=>({
            ...prevState,
            minPrice:newFilteredPrice
        }))
    }

    const handleCategoryChange=(e)=>{
        const newCategory=e.target.value
        console.log(newCategory)
        setFilters(prevState=>({
            ...prevState,
            category:newCategory,
        }))
    }

    return (
        <section className="filters">
            <div>
                <label htmlFor={minPriceFilterId}>Precio</label>
                <input type="range" min="0" max="1749" value={filters.minPrice} id={minPriceFilterId} onChange={handleRangeChange} />
                <span>${filters.minPrice}</span>
            </div>
            <div>
                <label htmlFor={categoryFilterId}>Categoria</label>
                <select id="category" onChange={handleCategoryChange}>
                    <option value="all">Todos</option>
                    <option value="laptops">Laptops</option>
                    <option value="smartphones">Smartphones</option>
                    <option value="fragrances">Perfumes</option>
                    <option value="skincare">Cuidado facial</option>
                    <option value="groceries">Alimentos</option>
                    <option value="home-decoration">Decoracion del hogar</option>
                </select>
            </div>
        </section>
    )
}
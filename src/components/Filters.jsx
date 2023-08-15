/* eslint-disable react/prop-types */
import "./Filters.css"
import { useState, useId } from "react"

export function Filters({changeFilters}){
    const [filteredPrice, setFilteredPrice]=useState(0)
    const minPriceFilterId=useId();
    const categoryFilterId=useId();

    const handleRangeChange=(e)=>{
        const newFilteredPrice=e.target.value
        setFilteredPrice(newFilteredPrice);
        changeFilters(prevState=>({
            ...prevState,
            minPrice:newFilteredPrice
        }))
    }

    const handleCategoryChange=(e)=>{
        const newCategory=e.target.value
        console.log(newCategory)
        changeFilters(prevState=>({
            ...prevState,
            category:newCategory,
        }))
    }

    return (
        <section className="filters">
            <div>
                <label htmlFor={minPriceFilterId}>Precio</label>
                <input type="range" min="0" max="1749" id={minPriceFilterId} onChange={handleRangeChange} />
                <span>${filteredPrice}</span>
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
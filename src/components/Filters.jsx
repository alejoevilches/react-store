/* eslint-disable react/prop-types */
import "./Filters.css"
import { useState } from "react"

export function Filters({onChange}){
    const [filteredPrice, setFilteredPrice]=useState(0)

    const handleRangeChange=(e)=>{
        const newFilteredPrice=e.target.value
        setFilteredPrice(newFilteredPrice);
        onChange(prevState=>({
            ...prevState,
            minPrice:newFilteredPrice
        }))
    }

    const handleCategoryChange=(e)=>{
        console.log(e.target.value)
    }
    return (
        <section className="filters">
            <div>
                <label htmlFor="price">Precio</label>
                <input type="range" min="0" max="2000" id="price" onChange={handleRangeChange} />
                <span>${filteredPrice}</span>
            </div>
            <div>
                <label htmlFor="category">Categoria</label>
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
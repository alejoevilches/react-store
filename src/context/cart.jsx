/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

const CartContext=createContext();

export function CartProvider({children}){
    const [cart, setCart]=useState([])
    const addToCart=(product)=>{
        const productInCartIndex=cart.findIndex(item=>item.id===product.id)
        if (productInCartIndex!=-1){
            const newCart=structuredClone(cart);
            newCart[productInCartIndex].quantity++
            return setCart(newCart)
        }
        setCart(prevState=>([
            ...prevState,
            {
                ...product,
                quantity:1
            }
    ]))
    }
    const clearCart=()=>{
        setCart([]);
    }

    return (
        <CartContext.Provider value={{cart,addToCart,clearCart}}>
            {children}
        </CartContext.Provider>
    )
}

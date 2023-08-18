/* eslint-disable react/prop-types */
import { CartIcon, ClearCartIcon } from "./Icons";
import { useId } from "react";
import "./Cart.css";
import {useCart} from "../hooks/useCart";

function CartItem({prize, quantity, thumbnail, title, addToCart}){
    return (
        <li>
            <img src={thumbnail} alt={title} />
            <div>
                <strong>{title}</strong> - ${prize}
            </div>
            <footer>
                <small>
                    Qty: {quantity}
                </small>
                <button onClick={addToCart}>
                    +
                </button>
            </footer>
        </li>
    )
}

export function Cart(){
    const cartId=useId()
    const {cart, clearCart, addToCart} = useCart();
    return (
        <>
            <label className="cart-button" htmlFor={cartId}>
                <CartIcon />
            </label>
            <input id={cartId} type="checkbox" hidden />

            <aside className="cart">
                <ul>
                    {cart.map(product=>{
                        return <CartItem key={product.id} addToCart={()=>addToCart(product)} {...product} />
                    })}
                </ul>
                <button onClick={clearCart}>
                    <ClearCartIcon />
                </button>
            </aside>
        </>        
    )
}
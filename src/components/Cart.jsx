import { CartIcon, ClearCartIcon, RemoveFromCartIcon } from "./Icons";
import { useId } from "react";
import "./Cart.css"

export function Cart(){
    const cartId=useId()
    return (
        <>
            <label className="cart-button" htmlFor={cartId}>
                <CartIcon />
            </label>
            <input id={cartId} type="checkbox" hidden />

            <aside className="cart">
                <ul>
                    <li>
                        <img src="https://i.dummyjson.com/data/products/2/thumbnail.jpg" alt="iPhone" />
                    <div>
                        <strong>iPhone</strong> - $1499
                    </div>
                    <footer>
                        <small>
                            Qty: 1
                        </small>
                        <button>
                            +
                        </button>
                    </footer>
                    </li>
                </ul>
                <button>
                    <ClearCartIcon />
                </button>
            </aside>
        </>        
    )
}
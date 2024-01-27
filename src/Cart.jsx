import { useContext, useEffect, useState } from "react";
import { Context } from "./context";
import styles from "./Css/Cart.module.css"

export default function Cart() {
    const { cart, dispatch } = useContext(Context);

    let items = 0;
    for (const { count } of cart) {
        items += count;
    }
    
    let totalPrice = 0;
    for ( const {price} of cart) {
        totalPrice += price;
    }

    return (
        <div className={styles.cart}>
            <div className={styles["price-box"]}>
                { cart.length > 0 
                ? (<div>{totalPrice} for {items} {items > 1 ? "items" : "item"}</div>) 
                : <div>Cart empty, Add something</div>}
            </div>
            <div className={styles["cart-item-box"]}>
                {cart.map(item => { 
                    if (item.count > 0) {
                        return (
                            <div>
                                <img src={item.src}/>
                                <span>{item.dish}</span>
                                <span>x {item.count}</span>
                                <div>
                                    <button onClick={() => 
                                        dispatch(
                                            {type: "Increment", name: item.dish, price: item.price / item.count, src: item.src})}>▲</button>
                                    <button onClick={() => 
                                        dispatch(
                                            {type: "Decrement", name: item.dish, price: item.price / item.count, src: item.src})}>▼</button>
                                </div>
                            </div>
                        )
                    }
                    return;
                    })}
            
            </div>
        </div>
    )
}
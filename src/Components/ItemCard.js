import styles from "./ItemCard.module.css";
import { Context } from "../context";
import { useContext, memo } from "react";

function ItemCard({price, src = null, name, children, cuisine}) {
    
    const { updateCart } = useContext(Context);

    return (
        <div className={styles.card}>
            <img src={src} alt="food image"/>
            <h3>{name} <span>{cuisine}</span></h3>
            <p>{children}</p>
            <strong>₹ {price}</strong>
            <span className={styles.add}><button onClick={() => updateCart(name, price, src)}>
                + add dish
            </button></span>
        </div>
    )
    
}

export default memo(ItemCard);


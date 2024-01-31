import { Link } from "react-router-dom"
import { Context } from "./context";

import styles from "./Css/SideBar.module.css"
import { useContext } from "react"
export default function SideBar() {

    const { cart } = useContext(Context);


    let sum = 0;
    for (const { count } of cart) {
        sum += count;
    }

    return (
        <div className={styles.sidebar}>
            <Link to="/">Home</Link>
            <Link to="/menu">Menu</Link>
            <Link to="/cart">Cart<span>{sum}</span></Link>
            <Link to="/about">About</Link>
        </div>
    )
}

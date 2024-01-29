import { useRef, useState } from "react"
import styles from "./Css/FilterOptions.module.css"
export default function FilterOptions({filter}) {

    const cuisineRef = useRef(null);
    const priceRef = useRef(null);
    // const [select, setSelect] = useState("All")

    return (
        <form className={styles.filter} 
        onSubmit={(e) => {
            e.preventDefault(); 
            filter({cuisine: cuisineRef.current.value, price: priceRef.current.value})}}>
            
            <div>
                <button type="submit">Filter</button>
                <select ref={cuisineRef}>
                    <option>All</option>
                    <option>Indian</option>
                    <option>Asian</option>
                    <option>European</option>
                    <option>American</option>
                </select>

                <select ref={priceRef}>
                    <option>High to low</option>
                    <option>Low to high</option>
                </select>
            </div>
        </form>
    )
}
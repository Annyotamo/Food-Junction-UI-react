import { useState } from "react"
import styles from "./Css/FilterOptions.module.css"
export default function FilterOptions({filter}) {

    const [select, setSelect] = useState("All")

    return (
        <form className={styles.filter} onSubmit={(e) => {e.preventDefault(); filter(select)}}>
            <div>
                <button type="submit" >Filter</button>
                <select onChange={(e) => {e.preventDefault();setSelect(e.target.value)}}>
                    <option>All</option>
                    <option>Indian</option>
                    <option>Asian</option>
                    <option>European</option>
                    <option>American</option>
                </select>

                <select>
                    <option>Low to high</option>
                    <option>High to</option>
                </select>
            </div>
        </form>
    )
}
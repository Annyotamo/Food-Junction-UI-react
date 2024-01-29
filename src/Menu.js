import { useEffect, useState } from "react";
import ItemCard from "./Components/ItemCard";
import styles from "./Css/Menu.module.css";
import FilterOptions from "./FilterOptions";
import { dishes } from "./info";


export default function Menu() {
  const [filterData, setFilterData] = useState({cuisine: "All", price: "High to low"});
  const [dishArray, setDishArray] = useState([]);


  
  useEffect(() => {
    if (filterData.cuisine === "All") {
      setDishArray(dishes);
    } else if (filterData.cuisine === "Indian") {
        setDishArray(
        dishes.filter(
          (dish) =>
            dish.cuisine === "Indian"
        )
      );
    } else if (filterData.cuisine === "Asian") {
      setDishArray(
        dishes.filter(
          (dish) =>
            dish.cuisine === "Korean" ||
            dish.cuisine === "Chinese" ||
            dish.cuisine === "Thai" ||
            dish.cuisine === "Japanese" || 
            dish.cuisine === "Middle Eastern"
        )
      );
    } else if (filterData.cuisine === "European") {
      setDishArray(
        dishes.filter(
          (dish) =>
            dish.cuisine === "Swiss" ||
            dish.cuisine === "French" ||
            dish.cuisine === "Italian" ||
            dish.cuisine === "English"
        )
      );
    } else if (filterData.cuisine === "American") {
      setDishArray(
        dishes.filter(
          (dish) =>
            dish.cuisine === "American" ||
            dish.cuisine === "Mexican" ||
            dish.cuisine === "Various" 
        )
      );
    }
  }, [filterData]);

  useEffect(() => {
    if (filterData.price === "High to low") setDishArray((prev) => prev.sort((a, b) => b.price - a.price));
    else if (filterData.price === "Low to high") setDishArray((prev) => prev.sort((a, b) => a.price - b.price));
  }, [filterData])
  
  return (
    <menu>
      <FilterOptions filter={setFilterData}></FilterOptions>
      <div className={styles["menu-container"]}>
        {dishArray.map((dish, index) => (
          <ItemCard
            name={dish.name}
            src={dish.url}
            key={index}
            cuisine={dish.cuisine}
            price={dish.price}
          >
            {dish.description}
          </ItemCard>
        ))}
      </div>
    </menu>
  );
}
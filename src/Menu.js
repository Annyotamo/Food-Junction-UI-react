import { useEffect, useState } from "react";
import ItemCard from "./Components/ItemCard";
import styles from "./Css/Menu.module.css";
import FilterOptions from "./FilterOptions";
import { dishes } from "./info";


export default function Menu() {
  const [filterData, setFilterData] = useState("All");
  const [dishArray, setDishArray] = useState([]);

  useEffect(() => {
    if (filterData === "All") {
      setDishArray(dishes);
    } else if (filterData === "Indian") {
        setDishArray(
        dishes.filter(
          (dish) =>
            dish.cuisine === "Indian"
        )
      );
    } else if (filterData === "Asian") {
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
    } else if (filterData === "European") {
      setDishArray(
        dishes.filter(
          (dish) =>
            dish.cuisine === "Swiss" ||
            dish.cuisine === "French" ||
            dish.cuisine === "Italian" ||
            dish.cuisine === "English"
        )
      );
    } else if (filterData === "American") {
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
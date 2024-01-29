import styles from "./Css/Home.module.css"; 
import { memo } from "react";
import { homeParas } from "./info";

function Home() {
    return (
        <div className={styles["home-container"]}>
            <img src={require("./images/header-image.jpg")} alt="image"/>
            <p>Introducing "FlavorFiesta," a delectable food cart app that promises a culinary journey like no other. Embark on a flavorful adventure with our diverse range of mouthwatering dishes served hot and fresh from our vibrant food carts. Whether you crave savory street tacos bursting with authentic spices or sweet and indulgent churros drizzled with rich chocolate, FlavorFiesta has something to satisfy every palate. Our app seamlessly connects you with a variety of local food vendors, each offering a unique and delicious menu. Browse through the app's user-friendly interface, explore enticing food cart profiles, and discover hidden gastronomic gems in your area. With easy ordering, quick pickups, and the option for contactless payments, FlavorFiesta ensures a convenient and delightful experience for food enthusiasts on the go. Elevate your street food experience with FlavorFiesta – where every bite tells a story, and every cart is a culinary delight waiting to be explored.</p>
            <div className={styles.text}>
                {
                    homeParas.map((item) => {
                        return (
                            <div>
                                <img src={item.url}/>
                                <p> {item.text}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default memo(Home)
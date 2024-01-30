import { signOut } from "firebase/auth"
import styles from "./Css/Header.module.css"
import { auth } from "./config/firebase"

export default function Header({setLogin}) {

    async function logOut() {
        try {
            await signOut(auth);
        } catch(e) {
            console.log("Error: ", e);
        }
    }
    return (
        <header className={styles.header}>
            <div>
                <button onClick={() => setLogin(true)}>Login</button>
                <button onClick={logOut}>Logout</button>
            </div>
            <h1>Food Junction</h1>
        </header> 
    )
}
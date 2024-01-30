import { signOut } from "firebase/auth"
import styles from "./Css/Header.module.css"
import { auth } from "./config/firebase"
import { useState } from "react";

export default function Header({setLogin, login}) {

    const [loginPanel, setLoginPanel] = useState(false);

    async function logOut() {
        try {
            await signOut(auth);
        } catch(e) {
            console.log("Error: ", e);
        }
    }
    return (
        <>
            <header className={styles.header}>
                <div>
                    <button onClick={() => setLogin(true)}>Login</button>
                    <button onClick={logOut}>Logout</button>
                </div>
                <h1>Food Junction</h1>
                <button onClick={() => setLoginPanel(prev => !prev)}><img src={require("./images/User.png")}/></button>
            </header>         
            {(loginPanel && !login) && 
            <div className={styles.login}>
                <p>Email in use</p>
                <p>{auth?.currentUser?.email}</p>
            </div>}
        </>
    )
}
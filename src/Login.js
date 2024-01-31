import { auth } from "./config/firebase"
import { createUserWithEmailAndPassword } from "firebase/auth"
import styles from "./Css/Login.module.css"
import { useState } from "react"
export default function({setLogin}) {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    console.log(auth?.currentUser?.email);

    async function proceedLogin() {
        try {
            await createUserWithEmailAndPassword(auth, email, password);
        } catch(e) {
            console.log("Error:", e);
        }
    }

    return (
  
        <div className={styles["login-container"]}>
            <div>
                <form>
                    <label>Email</label>
                    <input type="text" 
                    onChange={(e) => setEmail(e.target.value)}/>
                    
                    <label>Password</label>
                    <input type="password"
                    onChange={(e) => setPassword(e.target.value)}/>
                    
                    <button type="submit" 
                    onClick={(e) => {e.preventDefault(); proceedLogin(); setLogin(false)}}>Proceed</button>
                    
                    <button onClick={() => setLogin(false)}>X</button>
                </form>
            </div>
        </div>
 
    )
}
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyC76tLxPw0FPyQFMe6uPsa2T_tdA3IKuHg",
  authDomain: "food-junction-62e96.firebaseapp.com",
  projectId: "food-junction-62e96",
  storageBucket: "food-junction-62e96.appspot.com",
  messagingSenderId: "248672144751",
  appId: "1:248672144751:web:542d09b69ae1ef6df16c9a",
  measurementId: "G-CNQYMF8WG2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
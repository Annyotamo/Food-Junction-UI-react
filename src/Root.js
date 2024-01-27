import SideBar from "./SideBar";
import styles from "./Css/Root.module.css";
import Home from "./Home";
import { Outlet } from "react-router";
import Menu from "./Menu";
import { createContext, useState, useEffect, useReducer } from "react";
import { Context } from "./context";
import Cart from "./Cart";
import About from "./About";

function reducer(state, action) {
    switch(action.type) {
        case "Add": {
            return [{dish: action.name, count: 1, price: action.price, src: action.src}, ...state];
        }
        case "Increment": {
            return state.map(
                (item) => item.dish === action.name ? 
                {...item, count: item.count + 1, price: item.price + action.price, src: action.src}
                : item
            );
        }
        case "Decrement": {
            return state.map(
                (item) => item.dish === action.name ? 
                {...item, count: item.count - 1, price: item.price - action.price, src: action.src}
                : item
            );
        }
        default: 
            return state;
    }
}

export default function Root() {

    const [cart, dispatch] = useReducer(reducer, [])

    function cartUpdation(name, price, src) {

        const existing = cart.find(item => item.dish === name);
        if (existing) dispatch({type: "Increment", name, price, src});
        else dispatch({type: "Add", name, price, src});
        
    }


    return (
        <Context.Provider value={{cart: cart, updateCart: cartUpdation, dispatch: dispatch}}>
            <main>
                <SideBar></SideBar>
                <header>
                    <h1>Food Junction</h1>
                </header>   
                <Outlet />  
            </main>
        </Context.Provider>
    )
}


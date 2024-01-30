import SideBar from "./SideBar";
import "./Css/Root.module.css";
import { Outlet } from "react-router";
import { useReducer, useState } from "react";
import { Context } from "./context";
import Login from "./Login";
import Header from "./Header";

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
    const [login, setLogin] = useState(false);

    function cartUpdation(name, price, src) {

        const existing = cart.find(item => item.dish === name);
        if (existing) dispatch({type: "Increment", name, price, src});
        else dispatch({type: "Add", name, price, src});
        
    }


    return (
        <Context.Provider value={{cart: cart, updateCart: cartUpdation, dispatch: dispatch}}>
            <main>
                {login && <Login setLogin={setLogin}/>}
                <Header setLogin={setLogin}/> 
                <SideBar />
                <Outlet />
            </main>
        </Context.Provider>
    )
}


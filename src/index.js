import Root from "./Root"
import { createRoot } from "react-dom/client";
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Menu from "./Menu";
import Home from "./Home";
import Cart from "./Cart";
import About from "./About";

const root = createRoot(document.getElementById("root"));

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root/>,
        errorElement: <h1>Oops! Some error occured</h1>,
        children: [
            {
                exact: true,
                path: "/", 
                element: <Home />
            },
            {
                path: "/menu",
                element: <Menu />
            }, 
            {
                path: "/cart",
                element: <Cart />
            }, 
            {
                path: "/about",
                element: <About />
            }
        ]
    }
])

root.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
)

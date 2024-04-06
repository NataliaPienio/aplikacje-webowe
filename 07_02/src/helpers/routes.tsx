import React from "react"
import Home from "../pages/Home"
import About from "../pages/About"
import Contact from "../pages/Contact"

interface RouteItem {
    path: string
    name: string
    element: React.JSX.Element
    hideInMenu?: boolean
}
// export const routes: RouteItem[]

export const routes: Array<RouteItem> = [
    {
        path: "/",
        name: "Home",
        element: <Home />
    },
    {
        path: "/about",
        name: "About",
        element: <About />
    },
    {
        path: "/contact",
        name: "Contact",
        element: <Contact />
    }
]
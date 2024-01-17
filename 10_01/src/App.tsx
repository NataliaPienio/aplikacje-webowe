import './App.css'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Navbar from "./components/Navbar"
import {routes} from "./helpers/routes.tsx"

function App() {

    return (
        <body>
        <BrowserRouter>
            <Navbar />
            <main>
            <Routes>
                {routes.map((route) => (
                    <Route
                        key={route.path}
                        path={route.path}
                        element={route.element}
                    />
                ))}
            </Routes>
            </main>
        </BrowserRouter>
        </body>
    )
}

export default App

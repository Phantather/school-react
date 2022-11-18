import {Suspense} from "react"
import {Routes, Route} from "react-router-dom"
import Layout from "./Layout/Layout";
import Home from "./pages/Home/Home";
import './styles/style.scss'

function App() {
    return (
        <Suspense fallback={"...loading"}>
            <Routes>
                <Route path={'/'} element={<Layout/>}>
                    <Route path={''} element={<Home/>}/>
                </Route>
            </Routes>
        </Suspense>
    );
}

export default App;

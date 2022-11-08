import Home from "./pages/Home";
import AllEmployees from "./pages/AllEmployees";
import AllDepartments from "./pages/AllDepartments.jsx";
import { Route, Routes } from "react-router-dom"

const App = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/employees" element={<AllEmployees />}></Route>
                <Route path="/departments" element={<AllDepartments/>}></Route>
            </Routes>
        </>
    )
}

export default App;
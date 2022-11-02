import  Home from "./pages/Home";
import  AllEmployees from "./pages/AllEmployees";
import {Route, Routes} from "react-router-dom"







const App = () => {




    return(

        <>
        <Routes>
        
        <Route path="/" element={<Home/>}/>
        <Route path="/employees" element={<AllEmployees/>}></Route>



        </Routes>






</>
        
    )


}

export default App;
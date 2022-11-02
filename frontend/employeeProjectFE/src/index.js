import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import {BrowserRouter} from "react-router-dom";
import Header from "./Components/Header";



const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
    <BrowserRouter> 
    <Header/>
    <App/> 
    </BrowserRouter>

)
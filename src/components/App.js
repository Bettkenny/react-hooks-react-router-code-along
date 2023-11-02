import React from "react";
import {Routes,Route} from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import About from "./About";
import NavBar from "./NavBar";
function App () {
    return (
        <div>
        <NavBar />
        <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/login" element={<Login/>}/>
        </Routes>
        </div>
    );
}
export default App;
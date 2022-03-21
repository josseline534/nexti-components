import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//component
import Home from "../view/Home";
function Navigation() {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/my-form' element={<Home />} />
            </Routes>
        </Router>
    );
}

export default Navigation;

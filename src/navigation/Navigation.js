import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//component
import { Home, AlertView, Page2, Page3, Page4 } from "../view/index";
function Navigation() {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/my-form' element={<Home />} />
                <Route path='/page2' element={<Page2 />} />
                <Route path='/page3' element={<Page3 />} />
                <Route path='/page4' element={<Page4 />} />
                <Route path='/my-alert' element={<AlertView />} />
            </Routes>
        </Router>
    );
}

export default Navigation;

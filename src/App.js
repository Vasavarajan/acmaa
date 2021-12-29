import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar/Navbar";
import Home from "./Routes/Home";
import About from "./Routes/About";
import Products from "./Routes/Products";
import Services from "./Routes/Services";
import ContactUs from "./Routes/ContactUs";

function App() {
    return (
        <Router>
            <div style={{width:"100%"}}> 

                <Navbar />
            </div>
                <Routes>
                    <Route index path="/" element={<Home />} />
                    <Route path="About" element={<About />} />
                    <Route path="Products" element={<Products />} />
                    <Route path="Services" element={<Services />} />
                    <Route path="ContactUs" element={<ContactUs />} />
                    <Route
                        path="*"
                        element={
                            <main style={{ padding: "1rem" }}>
                                <p>There's nothing here!</p>
                            </main>
                        }
                    />
                </Routes>
        </Router>
    );
}

export default App;

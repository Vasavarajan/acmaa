import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar/Navbar";
import Home from "./Routes/Home";
import About from "./Routes/About";

function App() {
    return (
        <Router>
            <div>
                <Navbar />
                <Routes>
                    <Route index path="/" element={<Home />} />
                    <Route path="About" element={<About />} />
                    <Route
                        path="*"
                        element={
                            <main style={{ padding: "1rem" }}>
                                <p>There's nothing here!</p>
                            </main>
                        }
                    />
                </Routes>
            </div>
        </Router>
    );
}

export default App;

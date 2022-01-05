import React from "react";
import { BrowserRouter as Router} from "react-router-dom";

import './App.css'
import Home from "./pages";
// import Home from "./Routes/Home";
// import About from "./Routes/About";
// import Products from "./Routes/Products";
// import Services from "./Routes/Services";
// import ContactUs from "./Routes/ContactUs";

function App() {
    return (
        // <Router>
        //     <div>
        //         <Navbar />
        //     </div>
        //     <Routes>
        //         <Route index path="/" element={<Home />} />
        //         <Route path="About" element={<About />} />
        //         <Route path="Products" element={<Products />} />
        //         <Route path="Services" element={<Services />} />
        //         <Route path="ContactUs" element={<ContactUs />} />
        //         <Route
        //             path="*"
        //             element={
        //                 <main style={{ padding: "1rem" }}>
        //                     <p>There's nothing here!</p>
        //                 </main>
        //             }
        //         />
        //     </Routes>
        // </Router>
        <Router>
            <Home />
        </Router>
    );
}

export default App;

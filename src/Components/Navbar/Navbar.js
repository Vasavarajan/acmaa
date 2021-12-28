import React from "react";

import "./Navbar.css";
import LeftSide from "./LeftSide";
import RightSide from "./RightSide";

function Navbar() {
    return (
        <div className="Navbar">
            <LeftSide />
            <RightSide />
        </div>
    );
}

export default Navbar;

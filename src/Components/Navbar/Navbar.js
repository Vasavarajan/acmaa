import React from "react";

import "./Navbar.css";
import LeftSide from "./LeftSide/LeftSide";
import RightSide from "./RightSide/RightSide";

function Navbar() {
    return (
        <div className="Navbar">
            <LeftSide />
            <RightSide />
        </div>
    );
}

export default Navbar;

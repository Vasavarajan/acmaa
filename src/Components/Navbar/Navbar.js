import React from "react";

import "./Navbar.css";
import LeftSide from "./LeftSide/LeftSide";
import RightSide from "./RightSide/RightSide";

function Navbar() {
    return (
        <div className="Navbar">
            <div className="LeftSide">
                <LeftSide />
            </div>
            <div className="RightSide">
                <RightSide />
            </div>
        </div>
    );
}

export default Navbar;

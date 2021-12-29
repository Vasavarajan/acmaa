import React from "react";

import "./LeftSide.css";
import Logo from "../../../Assets/Images/Logo.png";

function LeftSide() {
    return (
        <div className="LeftSide">
            <img
                src={Logo}
                alt="Logo"
                width="40px"
                height="50px"
                className="Logo"
            />
            <h1 className="Cname">ACMAA</h1>
        </div>
    );
}

export default LeftSide;

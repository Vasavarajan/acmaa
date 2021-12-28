import React from "react";

import './LeftSide.css'
import Logo from "../../../Assets/Images/Logo.png";

function LeftSide() {
    return (
        <div className="LeftSide"> 
            <img src={Logo} alt="Logo" width="100%" height="100%" />
            <h1>ACMAA</h1>
        </div>
    );
}

export default LeftSide;

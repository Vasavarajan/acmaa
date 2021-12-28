import React from "react";
import { NavLink } from "react-router-dom";

import "./RightSide.css";


function RightSide() {
    return (
        <div className="RightSide">
            <NavLink
                className="link"
                style={({ isActive }) => {
                    return {
                        display: "block",
                        margin: "1rem 0",
                        color: isActive ? "red" : "",
                    };
                }}
                to={`/`}
            >
                Home
            </NavLink>
            <NavLink
                className="RightSide"
                style={({ isActive }) => {
                    return {
                        display: "block",
                        margin: "1rem 0",
                        color: isActive ? "red" : "",
                    };
                }}
                to={`/About`}
            >
                About
            </NavLink>
        </div>
    );
}

export default RightSide;

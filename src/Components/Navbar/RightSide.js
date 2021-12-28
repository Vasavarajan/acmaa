import React from "react";
import { NavLink } from "react-router-dom";

function RightSide() {
    return (
        <div>
            <NavLink
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

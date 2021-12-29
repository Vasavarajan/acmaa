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
                        color: isActive ? "red" : "",
                    };
                }}
                to={`/`}
            >
                HOME
            </NavLink>
            <NavLink
                className="link"
                style={({ isActive }) => {
                    return {
                        display: "block",
                        color: isActive ? "red" : "",
                    };
                }}
                to={`/About`}
            >
                ABOUT
            </NavLink>
            <NavLink
                className="link"
                style={({ isActive }) => {
                    return {
                        display: "block",
                        color: isActive ? "red" : "",
                    };
                }}
                to={`/Products`}
            >
                PRODUCTS
            </NavLink>
            <NavLink
                className="link"
                style={({ isActive }) => {
                    return {
                        display: "block",
                        color: isActive ? "red" : "",
                    };
                }}
                to={`/Services`}
            >
                SERVICES
            </NavLink>
            <NavLink
                className="link"
                style={({ isActive }) => {
                    return {
                        display: "block",
                        color: isActive ? "red" : "",
                    };
                }}
                to={`/ContactUs`}
            >
                CONTACT US
            </NavLink>
        </div>
    );
}

export default RightSide;

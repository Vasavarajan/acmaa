import React from "react";

// import "./Navbar.css";
import {FaBars } from 'react-icons/fa'
import { Nav, NavbarContainer, NavLogo ,MobileIcon,NavMenu,NavItems,NavLinks } from "./NavbarElements";

function Navbar() {
    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogo to='/'>ACMAA</NavLogo>
                    <MobileIcon>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItems>
                            <NavLinks to='about'>About</NavLinks>
                        </NavItems>
                    </NavMenu>
                </NavbarContainer>
            </Nav>
        </>
    );
}

export default Navbar;

import React from "react";

// import "./Navbar.css";
// import {FaBars } from 'react-icons/fa'
import { BiMenuAltRight } from "react-icons/bi";

import {
    Nav,
    NavbarContainer,
    NavLogo,
    MobileIcon,
    NavMenu,
    NavItems,
    NavLinks,
    NavBtn,
    NavBtnLink,
} from "./NavbarElements";

function Navbar({ toggle }) {
    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogo to="/">ACMAA</NavLogo>
                    <MobileIcon onClick={toggle}>
                        <BiMenuAltRight />
                    </MobileIcon>
                    <NavMenu>
                        {/* <NavItems>
                            <NavLinks to="/">Home</NavLinks>
                        </NavItems> */}
                        <NavItems>
                            <NavLinks to="about">About</NavLinks>
                        </NavItems>
                        <NavItems>
                            <NavLinks to="products">Products</NavLinks>
                        </NavItems>
                        <NavItems>
                            <NavLinks to="services">Services</NavLinks>
                        </NavItems>
                        <NavItems>
                            <NavLinks to="contactus">Contact Us</NavLinks>
                        </NavItems>
                    </NavMenu>
                    <NavBtn>
                        <NavBtnLink to="/signin">Sign In</NavBtnLink>
                    </NavBtn>
                </NavbarContainer>
            </Nav>
        </>
    );
}

export default Navbar;

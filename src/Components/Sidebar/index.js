import React from "react";

import {
    SidebarContainer,
    Icon,
    CloseIcon,
    SidebarWrapper,
    SidebarMenu,
    SidebarLink,
} from "./SidebarElements";

function Sidebar({ isOpen, toggle }) {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    {/* <SidebarLink to="/" onClick={toggle}>
                        Home
                    </SidebarLink> */}
                    <SidebarLink
                        to="about"
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact="true"
                        offset={-80}
                        onClick={toggle}
                        activeClass="active"
                    >
                        About
                    </SidebarLink>
                    <SidebarLink
                        to="products"
                        onClick={toggle}
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact="true"
                        offset={-80}
                    >
                        Products
                    </SidebarLink>
                    <SidebarLink
                        to="services"
                        onClick={toggle}
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact="true"
                        offset={-80}
                    >
                        Services
                    </SidebarLink>
                    <SidebarLink
                        to="signup"
                        onClick={toggle}
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact="true"
                        offset={-80}
                    >
                        Sign Up
                    </SidebarLink>
                </SidebarMenu>
            </SidebarWrapper>
        </SidebarContainer>
    );
}

export default Sidebar;

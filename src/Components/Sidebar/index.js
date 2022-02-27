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
                    
                    <SidebarLink
                        to="home"
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact="true"
                        offset={-60}
                        onClick={toggle}
                    >
                        Home
                    </SidebarLink>
                    <SidebarLink
                        to="about"
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact="true"
                        offset={-60}
                        onClick={toggle}
                        // activeClass="active"
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
                        offset={-60}
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
                        offset={-60}
                    >
                        Services
                    </SidebarLink>
                    <SidebarLink
                        to="contactUs"
                        onClick={toggle}
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact="true"
                        offset={-60}
                    >
                        Contact Us
                    </SidebarLink>
                </SidebarMenu>
            </SidebarWrapper>
        </SidebarContainer>
    );
}

export default Sidebar;

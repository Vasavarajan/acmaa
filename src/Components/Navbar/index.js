import React from "react";
import { BiMenuAltRight } from "react-icons/bi";
import { animateScroll as scroll } from "react-scroll";

import {
    Nav,
    NavbarContainer,
    NavLogo,
    MobileIcon,
    NavMenu,
    NavItems,
    NavLinks,
    LogoIcon,
} from "./NavbarElements";

import Logo from "../../Assets/Images/COMPANY LOGO.png";

function Navbar({ toggle }) {
    // const [scrollNav, setScrollNav] = useState(false);

    // const changeNav = () => {
    //     if (window.scrollY >= 80) {
    //         setScrollNav(true);
    //     } else {
    //         setScrollNav(false);
    //     }
    // };

    // useEffect(() => {
    //     window.addEventListener("scroll", changeNav);
    // }, []);

    const toggleHome = () => {
        scroll.scrollToTop();
    };

    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogo to="/" onClick={toggleHome}>
                        <LogoIcon src={Logo} />
                        ACMAA
                    </NavLogo>
                    <MobileIcon onClick={toggle}>
                        <BiMenuAltRight />
                    </MobileIcon>
                    <NavMenu>
                        {/* <NavItems>
                            <NavLinks to="/">Home</NavLinks>
                        </NavItems> */}
                        <NavItems>
                            <NavLinks
                                to="home"
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact="true"
                                offset={-60}
                            >
                                Home
                            </NavLinks>
                        </NavItems>
                        <NavItems>
                            <NavLinks
                                to="about"
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact="true"
                                offset={-60}
                            >
                                About
                            </NavLinks>
                        </NavItems>
                        <NavItems>
                            <NavLinks
                                to="products"
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact="true"
                                offset={-60}
                            >
                                Products
                            </NavLinks>
                        </NavItems>
                        <NavItems>
                            <NavLinks
                                to="services"
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact="true"
                                offset={-60}
                            >
                                Services
                            </NavLinks>
                        </NavItems>
                        <NavItems>
                            <NavLinks
                                to="contactUs"
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact="true"
                                offset={-60}
                            >
                                Contact Us
                            </NavLinks>
                        </NavItems>
                    </NavMenu>
                </NavbarContainer>
            </Nav>
        </>
    );
}

export default Navbar;

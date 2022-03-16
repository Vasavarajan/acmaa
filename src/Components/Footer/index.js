import React from "react";
import { animateScroll as scroll } from "react-scroll";

import {
    FooterContainer,
    FooterWrap,
    SocialMedia,
    SocialMediaWrap,
    Left,
    SocialLogo,
    WebsiteRights,
    LogoIcon,
    DesignBy,
} from "./FooterElements";

import Logo from "../../Assets/Images/COMPANY LOGO.png";

function Footer() {
    const toggleHome = () => {
        scroll.scrollToTop();
    };

    return (
        <FooterContainer>
            <FooterWrap>
                <SocialMedia>
                    <SocialMediaWrap>
                        <Left>
                            <SocialLogo to="/" onClick={toggleHome}>
                                <LogoIcon src={Logo} />
                                ACMAA
                            </SocialLogo>
                            <WebsiteRights>
                                © {new Date().getFullYear()} All rights
                                reserved.
                            </WebsiteRights>
                        </Left>
                        <DesignBy>Design by : Vasavarajan</DesignBy>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    );
}

export default Footer;

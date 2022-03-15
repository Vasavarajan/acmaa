import React from "react";
import { animateScroll as scroll } from "react-scroll";

import {
    FooterContainer,
    FooterWrap,
    SocialMedia,
    SocialMediaWrap,
    SocialLogo,
    WebsiteRights,
} from "./FooterElements";

function Footer() {
    const toggleHome = () => {
        scroll.scrollToTop();
    };

    return (
        <FooterContainer>
            <FooterWrap>
                <SocialMedia>
                    <SocialMediaWrap>
                        {/* <SocialLogo to="/" onClick={toggleHome}>
                            ACMAA
                        </SocialLogo> */}
                        <WebsiteRights>
                            ACMAA © {new Date().getFullYear()} All rights
                            reserved.
                        </WebsiteRights>

                        <WebsiteRights>Design by : Vasavarajan</WebsiteRights>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    );
}

export default Footer;

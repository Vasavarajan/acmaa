import React from "react";
import { animateScroll as scroll } from "react-scroll";

import {
    FooterContainer,
    FooterWrap,
    TopSection,
    CompanyLogo,
    CompanyName,
    Names,
    Name,
    AddressSectiion,
    Wrap,
    Line,
    PhoneNumber,
    BottomSection,
    WebsiteRights,
    LogoIcon,
    DesignBy,
    Location,
    Phone,
} from "./FooterElements";

import Logo from "../../Assets/Images/COMPANY LOGO.png";

function Footer() {
    const toggleHome = () => {
        scroll.scrollToTop();
    };

    return (
        <FooterContainer>
            <FooterWrap>
                <TopSection>
                    <CompanyLogo to="/" onClick={toggleHome}>
                        <LogoIcon src={Logo} />
                        <CompanyName>
                            <Names>ACCURATE MACHINES AND</Names>
                            <Names>ACCESSERIES PVT. LTD.</Names>
                            <Name>ACMAA</Name>
                        </CompanyName>
                    </CompanyLogo>
                    <AddressSectiion>
                        <Location />
                        <Wrap>
                            <Line>397, SIDCO Industrial Estate ,</Line>
                            <Line>Ambattur, Chennai,</Line>
                            <Line>TamilNadu - 600098</Line>
                        </Wrap>
                    </AddressSectiion>
                    <PhoneNumber>
                        <Phone />
                        <Wrap>
                            <Line>V. Purushothaman ( +919840246804 )</Line>
                            <Line>P. Sampath Kumar ( +919840148272 )</Line>
                        </Wrap>
                    </PhoneNumber>
                </TopSection>
                <BottomSection>
                    <WebsiteRights>
                        ACMAA © {new Date().getFullYear()} All rights reserved.
                    </WebsiteRights>
                    <DesignBy>Designed by : Vasavarajan</DesignBy>
                </BottomSection>
            </FooterWrap>
        </FooterContainer>
    );
}

export default Footer;

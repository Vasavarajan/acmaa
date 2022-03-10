import React, { useState } from "react";

import {
    HeroContainer,
    Content,
    HeroH1,
    HeroBtnWrapper,
    ArrowForward,
    ArrowRight,
} from "./HeroElements";

import { Button } from "../ButtonElements";

function HeroSection() {
    const [hover, setHover] = useState(false);

    const onHover = () => {
        setHover(!hover);
    };

    return (
        <HeroContainer id="home">
            <Content>
                <HeroH1>
                    Manufacturer Of Special Purpose Machines & Industrial
                    Automation Systems
                </HeroH1>

                <HeroBtnWrapper>
                    <Button
                        to="contactUs"
                        onMouseEnter={onHover}
                        onMouseLeave={onHover}
                        primary="true"
                        dark="true"
                        fontBig="true"
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact="true"
                        offset={-60}
                    >
                        Contact Us
                        {hover ? <ArrowForward /> : <ArrowRight />}
                    </Button>
                </HeroBtnWrapper>
            </Content>
        </HeroContainer>
    );
}

export default HeroSection;

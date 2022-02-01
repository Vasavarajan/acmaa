import React, { useState } from "react";

import {
    HeroContainer,
    HeroWrapper,
    Column,
    HeroH1,
    HeroP,
    HeroBtnWrapper,
    ArrowForward,
    ArrowRight,
    ImgWrap,
    Img,
} from "./HeroElements";

import { Button } from "../ButtonElements";
import img from "../../Assets/Images/heroImg.png";


function HeroSection() {
    const [hover, setHover] = useState(false);

    const onHover = () => {
        setHover(!hover);
    };

    return (
        <HeroContainer id="home">
            <HeroWrapper>
                <Column>
                    <HeroH1>SPM Manufactures</HeroH1>
                    <HeroP>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, modi, nesciunt reprehenderit sapiente ad voluptates consequuntur voluptatibus consectetur consequatur quos totam maxime excepturi blanditiis, molestias expedita facere! Nisi deserunt natus voluptatem iure incidunt porro omnis dignissimos ipsum laudantium rem dolorum nulla, eos tempore temporibus repellat, doloremque delectus. Recusandae, odio provident.
                    </HeroP>
                    <HeroBtnWrapper>
                        <Button
                            to="signup"
                            onMouseEnter={onHover}
                            onMouseLeave={onHover}
                            primary="true"
                            dark="true"
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact="true"
                            offset={-80}
                        >
                            Contact US
                            {hover ? <ArrowForward /> : <ArrowRight />}
                        </Button>
                    </HeroBtnWrapper>
                </Column>
                <Column>
                    <ImgWrap>
                        <Img src={img} alt='machine' />
                    </ImgWrap>
                </Column>
            </HeroWrapper>
        </HeroContainer>
    );
}

export default HeroSection;

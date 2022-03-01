import React from "react";

import {
    DataContainer,
    Datarapper,
    Data,
    ImgWrap,
    Img,
    Title,
} from "./DataElements";
import Counter from "../Counter";
import Exp from "../../Assets/Images/Icons/Exp.png";
import Machine from "../../Assets/Images/Icons/Machine.png";
import Clients from "../../Assets/Images/Icons/Clients.png";
import Fixtures from "../../Assets/Images/Icons/Fixtures.png";

const DataSection = () => {
    return (
        <DataContainer id="about">
            <Datarapper>
                <Data>
                    <ImgWrap>
                        <Img src={Exp} />
                    </ImgWrap>
                    <Counter end={25} suffix="+" duration={2} />
                    <Title>Years Of Exp.</Title>
                </Data>
                <Data>
                    <ImgWrap>
                        <Img src={Machine} />
                    </ImgWrap>
                    <Counter end={2000} suffix="+" duration={2} />
                    <Title>Machines</Title>
                </Data>
                <Data>
                    <ImgWrap>
                        <Img src={Clients} />
                    </ImgWrap>

                    <Counter end={50} suffix="+" duration={2} />
                    <Title>Happy Clients</Title>
                </Data>
                <Data>
                    <ImgWrap>
                        <Img src={Fixtures} />
                    </ImgWrap>

                    <Counter end={1000} suffix="+" duration={2} />
                    <Title>Fixtures</Title>
                </Data>
            </Datarapper>
        </DataContainer>
    );
};

export default DataSection;

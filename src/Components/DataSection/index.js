import React from "react";

import { DataContainer, Datarapper, Data, Img, Title } from "./DataElements";
import Counter from "../Counter";
import Exp from '../../Assets/Images/Icons/Exp.png'

const DataSection = () => {
    return (
        <DataContainer>
            <Datarapper>
                <Data>
                    <Img src={Exp} />
                    <Counter end={25} suffix="+" />
                    <Title>Years Of Exp.</Title>
                </Data>
            </Datarapper>
        </DataContainer>
    );
};

export default DataSection;

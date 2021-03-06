import React from "react";

import { MapContainer, ImgWrap, Img, HeadLine } from "./MapElements";
import img from "../../Assets/Images/MAP.png";

const MapSection = () => {
    return (
        <MapContainer>
            <ImgWrap>
                <Img src={img} alt="World Map" />
            </ImgWrap>
            <HeadLine>
                Exported to Singapore, Muscat, Salalah ( Oman ), Italy & USA
            </HeadLine>
        </MapContainer>
    );
};

export default MapSection;

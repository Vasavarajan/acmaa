import React from "react";

import {AboutContainer} from './AboutElemnets'

import DataSection from "../DataSection";
import MapSection from "../MapSection";

function AboutSection() {
    return (
        <AboutContainer id="about">
            <DataSection />
            <MapSection />
        </AboutContainer>
    );
}

export default AboutSection;

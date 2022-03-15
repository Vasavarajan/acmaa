import React from "react";

import Icon1 from "../../Assets/Images/svg1.svg";
import {
    ServicesContainer,
    ServicesWrapper,
    CarouselSection,
    ServicesCarousel,
    ServicesH1,
    ServicesCard,
    ServicesIcon,
    ServicesH2,
    ServicesList,
    List,
} from "./ServicesElements";



let slides = [
    <ServicesCard>
        <ServicesIcon src={Icon1} />
        <ServicesH2>Aluminium Foundry Industries</ServicesH2>
        <ServicesList>
            <List>Tilting Gravity Die Casting Machine.</List>
            <List>Gravity Die Casting Machine.</List>
            <List>Trimming Presses.</List>
            <List>Riser Cutting Machine.</List>
            <List>De coring Machine.</List>
            <List>Components Leak checking Systems.</List>
        </ServicesList>
    </ServicesCard>,
    <ServicesCard>
        <ServicesIcon src={Icon1} />
        <ServicesH2>Industrial Automation</ServicesH2>
        <ServicesList>
            <List>Fixtures for VMC & HMC Machines.</List>
            <List>Turning Fixtures for CNC Lathes.</List>
            <List>Leak Checking Systems.</List>
            <List>Testing Equipments.</List>
            <List>Parts Loader.</List>
            <List>Belt Conveyors.</List>
        </ServicesList>
    </ServicesCard>,
    <ServicesCard>
        <ServicesIcon src={Icon1} />
        <ServicesH2>Products Manufacturing Industries</ServicesH2>
        <ServicesList>
            <List>Multi Spindle Drilling & Tapping Machine.</List>
            <List>Rough Boring Machine.</List>
            <List>Milling Machine.</List>
            <List>Component Washing Machines.</List>
            <List>Component Drying MAchines.</List>
            <List>Facing and Centering Machines.</List>
        </ServicesList>
    </ServicesCard>,
    <ServicesCard>
        <ServicesIcon src={Icon1} />
        <ServicesH2>Brake Lining Industries</ServicesH2>
        <ServicesList>
            <List>Brake shoe O.D Grinding Machine.</List>
            <List>Brake pad grooving & grinding Machines.</List>
            <List>Brake shoe drilling machine.</List>
            <List>Fan Chamfering Machine.</List>
            <List>Brake pad rough cum fine grinding Machine.</List>
        </ServicesList>
    </ServicesCard>,
    <ServicesCard>
        <ServicesIcon src={Icon1} />
        <ServicesH2>Bi-Cycle Industries</ServicesH2>
        <ServicesList>
            <List>Flexible Mitring Machine.</List>
            <List>Horizontal Mitring Machine.</List>
            <List>Name Plate Drilling Machine.</List>
            <List>Cycle dynamic Testing Equipments.</List>
            <List>Frame Numbering Machine.</List>
            <List>Head cup Pressing Machine.</List>
        </ServicesList>
    </ServicesCard>,
];

function Services() {
    return (
        <ServicesContainer id="services">
            <ServicesWrapper>
                <ServicesH1>Our Services</ServicesH1>
                <CarouselSection>
                    <ServicesCarousel
                        slides={slides}
                        autoplay={true}
                        interval={4000}
                        arrows={false}
                    />
                </CarouselSection>
            </ServicesWrapper>
        </ServicesContainer>
    );
}

export default Services;

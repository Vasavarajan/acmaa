import React from "react";

import Icon1 from '../../Assets/images/svg1.svg'
import {
    ServicesContainer,
    ServicesWrapper,
    ServicesH1,
    ServicesCard,
    ServicesIcon,
    ServicesH2,
    ServicesP,
} from "./ServicesElements";

function Services() {
    return (
        <ServicesContainer id="services">
            <ServicesH1>Our Services</ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src={Icon1} />
                    <ServicesH2>Reduce expences</ServicesH2>
                    <ServicesP>
                        We help reduce your fees and increase your overall
                        revenue.
                    </ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon1} />
                    <ServicesH2>Reduce expences</ServicesH2>
                    <ServicesP>
                        We help reduce your fees and increase your overall
                        revenue.
                    </ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon1} />
                    <ServicesH2>Reduce expences</ServicesH2>
                    <ServicesP>
                        We help reduce your fees and increase your overall
                        revenue.
                    </ServicesP>
                </ServicesCard>
            </ServicesWrapper>
        </ServicesContainer>
    );
}

export default Services;

import React from "react";

import FormSection from "../FormSection";
import {
    ContactContainer,
    ContactWrapper,
    Heading,
    MapContainer,
    FormContainer,
    FormWrap,
    Location
} from "./ContactUsElements";

const ContactUs2 = () => {
    return (
        <ContactContainer id="contactUs">
            <ContactWrapper>
                <Heading>Contact Us</Heading>
                <FormWrap>
                    <MapContainer>
                        <Location
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3885.8368326972372!2d80.1596535152563!3d13.109521115382917!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a526396ffffffff%3A0x448fad9dd5eb8515!2sACCURATE%20MACHINES%20AND%20ACCESSORIES%20PRIVATE%20LIMITED!5e0!3m2!1sen!2sin!4v1646023967875!5m2!1sen!2sin"
                            width="100%"
                            TITLE="MAP"
                            height="100%"
                            allowfullscreen=""
                            loading="lazy"
                        ></Location>
                    </MapContainer>
                    <FormContainer>
                        <FormSection />
                    </FormContainer>
                </FormWrap>
            </ContactWrapper>
        </ContactContainer>
    );
};

export default ContactUs2;

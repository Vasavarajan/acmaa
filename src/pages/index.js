import React, { useState } from "react";

import Navbar from "../Components/Navbar";
import Sidebar from "../Components/Sidebar";
import HeroSection from "../Components/HeroSection";
import AboutSection from "../Components/AboutSection";

import InfoSection from "../Components/InfoSection";
import { homeObjTwo } from "../Components/InfoSection/Data";
// import Services from "../Components/Services";
import Footer from "../Components/Footer";
import ContactUs from "../Components/ContactUsSection";
import ClientSection from "../Components/ClientSection";
import LocationSection from "../Components/LocationSection";

function Home() {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} />
            <HeroSection />
            <AboutSection />
            <InfoSection {...homeObjTwo} />
            {/* <Services /> */}
            <ClientSection />
            {/* <LocationSection /> */}
            <ContactUs />
            <Footer />
        </>
    );
}

export default Home;

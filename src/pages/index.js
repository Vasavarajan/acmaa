import React, { useState } from "react";

import Navbar from "../Components/Navbar";
import Sidebar from "../Components/Sidebar";
import HeroSection from "../Components/HeroSection";
import InfoSection from "../Components/InfoSection";
import {
    homeObjOne,
    homeObjTwo,
    homeObjThree,
} from "../Components/InfoSection/Data";
import Services from "../Components/Services";
import Footer from "../Components/Footer";
// import Card from "../Components/Card";
import ContactUs from "../Components/ContactUsSection";
// import Marquee from "../Components/Marquee";

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

            <InfoSection {...homeObjOne} />
            <InfoSection {...homeObjTwo} />

            <Services />
            <InfoSection {...homeObjThree} />
            <ContactUs />
            {/* <Card />
            <Card />
            <Card /> */}
            {/* <Marquee /> */}
            <Footer />
        </>
    );
}

export default Home;

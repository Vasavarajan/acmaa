import React, { useState } from "react";

import Navbar from "../Components/Navbar";
import Sidebar from "../Components/Sidebar";
import HeroSection from "../Components/HeroSection";
import InfoSection from "../Components/InfoSection";
import {
    homeObjOne,
    homeObjTwo,
} from "../Components/InfoSection/Data";
import Services from "../Components/Services";

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
        </>
    );
}

export default Home;

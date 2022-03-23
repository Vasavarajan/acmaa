import React, { useState } from "react";

import Navbar from "../Components/Navbar";
import Sidebar from "../Components/Sidebar";
import HeroSection from "../Components/HeroSection";
import AboutSection from "../Components/AboutSection";
import ProductSection from "../Components/ProductSection";
import Services from "../Components/Services";
import ClientSection from "../Components/ClientSection";
import ContactUs from "../Components/ContactUsSection";
import Card from "../Components/Card";
import Footer from "../Components/Footer";

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
            <ProductSection />
            <Services />
            <ClientSection />
            <ContactUs />
            <Card />
            <Footer />
        </>
    );
}

export default Home;

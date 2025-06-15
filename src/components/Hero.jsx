import React from "react";
import ScrollToSection from "./ScrollToSection";
import bgImg from "../assets/fotos/compressed/img-0.jpg";

const Hero = ({ title, subtitle }) => {
    return (
        <section
            id="hero"
            className="h-screen w-screen flex items-center justify-center bg-position-[56%_50%] md:bg-position-center bg-cover"
            style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${bgImg})` }}>
            <div className="flex flex-col items-center justify-center text-white">
                <h1 className="dancing-script-700 text-6xl md:text-8xl font-bold select-none">{title}</h1>
                <p className="text-xl md:text-2xl select-none">{subtitle}</p>
                <ScrollToSection sectionId="cuenta-regresiva" textColor="text-white" />
            </div>
        </section>
    );
};

export default Hero;

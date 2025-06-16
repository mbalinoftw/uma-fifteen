import React from "react";
import Confirmation from "./components/Confirmation";
import Countdown from "./components/Countdown";
import DressCode from "./components/DressCode";
import Gallery from "./components/Gallery";
import Gift from "./components/Gift";
import Hero from "./components/Hero";
import Location from "./components/Location";
import Music from "./components/Music";
import Navbar from "./components/Navbar";
import Social from "./components/Social";
import { ThemeProvider } from "./context/ThemeContext";
import data from "./data";
import Quote from "./components/Quote";
import Footer from "./components/Footer";

const App = () => {
    return (
        <ThemeProvider>
            <div className="">
                <Navbar variant="primary" />
                <Hero title="Uma" subtitle="Mis 15 años" variant="primary" />
                <Countdown targetDate={data.TARGET_DATE} variant="accent" />
                <Quote variant="primary" />
                <Location variant="secondary" />
                <DressCode variant="primary" />
                <Confirmation variant="accent" />
                <Gallery />
                <Music variant="secondary" />
                <Social variant="primary" />
                <Footer variant="primary" />
            </div>
        </ThemeProvider>
    );
};

export default App;

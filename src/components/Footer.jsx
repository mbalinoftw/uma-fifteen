import React from "react";
import Container from "./Container";
import { useTheme } from "../context/ThemeContext";

const Footer = ({ variant = "primary" }) => {
    const { getColorStyles } = useTheme();
    const colorStyles = getColorStyles(variant);

    return (
        <footer className="py-4" style={colorStyles}>
            <Container>
                <div className="flex flex-col justify-center items-center text-center gap-4">
                    <div className="flex flex-col items-center justify-center">
                        <h1 className="dancing-script-700 text-5xl md:text-6xl font-bold select-none">Uma</h1>
                        <p className="text-lg md:text-xl select-none">Mis 15 años</p>
                    </div>
                    <p className="text-md">¡Gracias por asistir a mi fiesta!</p>
                </div>
            </Container>
        </footer>
    );
};

export default Footer;

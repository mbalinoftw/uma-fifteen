import React from "react";
import Container from "./Container";
import { GiLargeDress } from "react-icons/gi";
import { useTheme } from "../context/ThemeContext";

const DressCode = ({ variant = "primary" }) => {
    const { getColorStyles } = useTheme();
    const colorStyles = getColorStyles(variant);

    return (
        <section id="dress-code" className="py-16" style={colorStyles}>
            <Container>
                <div className="flex flex-col items-center justify-center text-center gap-4">
                    <GiLargeDress className="text-7xl" />
                    <p className="max-w-prose text-lg">Dress Code: Elegante Sport</p>
                </div>
            </Container>
        </section>
    );
};

export default DressCode;

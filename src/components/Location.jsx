import React from "react";
import Container from "./Container";
import ButtonWithLink from "./ButtonWithLink";
import { GiPartyPopper } from "react-icons/gi";
import { FaMapMarkerAlt } from "react-icons/fa";
import { useTheme } from "../context/ThemeContext";

const Location = ({ variant = "primary" }) => {
    const { getColorStyles } = useTheme();
    const colorStyles = getColorStyles(variant);

    return (
        <section id="ubicacion" className="py-16" style={colorStyles}>
            <Container>
                <div className="flex flex-col items-center justify-center gap-4">
                    <GiPartyPopper className="text-7xl" />
                    <div className="flex flex-col items-center">
                        <h3 className="text-2xl">Jano's Merlo</h3>
                        <p className="text-xl">Pringles 780, B1722, Merlo, Bs.As.</p>
                        <p className="text-xl">Viernes 18 de Julio de 2025</p>
                        <p className="text-xl">21:30 a 05:30hs</p>
                    </div>
                    <ButtonWithLink
                        linkUrl="https://maps.app.goo.gl/qC9oEvh7cgtSqajZ8"
                        text="Cómo llegar"
                        icon={<FaMapMarkerAlt />}
                        variant={variant}
                    />
                </div>
            </Container>
        </section>
    );
};

export default Location;

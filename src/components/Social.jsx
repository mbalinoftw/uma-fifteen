import React from "react";
import Container from "./Container";
import { FaInstagram } from "react-icons/fa";
import ButtonWithLink from "./ButtonWithLink";
import { useTheme } from "../context/ThemeContext";
import bgImg from "../assets/fotos/compressed/img-6.jpg";

const Social = ({ variant = "primary" }) => {
    const { getColorStyles } = useTheme();
    const colorStyles = getColorStyles(variant);

    return (
        <section
            id="redes"
            className="min-h-[500px] md:min-h-[600px] py-8 bg-cover bg-position-[50%_25%] md:bg-position-[50%_30%] flex items-center justify-center text-white"
            style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${bgImg})` }}>
            <Container>
                <div className="flex flex-col justify-center items-center text-center gap-4">
                    <FaInstagram className="text-7xl" />
                    <p className="max-w-prose text-lg">
                        Seguime en mi cuenta de Instagram y etiquetame en tus fotos y videos con el hashtag
                        <span className="font-bold"> #15deUma</span>
                    </p>
                    <ButtonWithLink
                        linkUrl="https://www.instagram.com/uumapalacios/"
                        text="Ver mi perfil"
                        icon={<FaInstagram />}
                        variant={variant}
                    />
                </div>
            </Container>
        </section>
    );
};

export default Social;

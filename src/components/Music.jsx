import React from "react";
import Container from "./Container";
import { IoMusicalNotes } from "react-icons/io5";
import { FaSpotify } from "react-icons/fa";
import ButtonWithLink from "./ButtonWithLink";
import { useTheme } from "../context/ThemeContext";

const Music = ({ variant = "primary" }) => {
    const { getColorStyles } = useTheme();
    const colorStyles = getColorStyles(variant);

    return (
        <section id="music" className="py-16" style={colorStyles}>
            <Container>
                <div className="flex flex-col justify-center items-center text-center gap-4">
                    <IoMusicalNotes className="text-7xl" />
                    <p className="max-w-prose text-lg">¿Qué canción no puede faltar en la fiesta? Te invito a que la agregues a la playlist.</p>
                    <ButtonWithLink
                        linkUrl="https://open.spotify.com/playlist/3Y2lxrY0l6uEVOgUjfehoA?si=OTTs2A2XTSCzZwvQDujlig&pi=MFjGAgx2SE2CI&pt=eff65ad2852534e8e77098a5b78a9834"
                        text="Sumar a la playlist"
                        icon={<FaSpotify />}
                        variant={variant}
                    />
                </div>
            </Container>
        </section>
    );
};

export default Music;

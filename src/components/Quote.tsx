import React from "react";
import Container from "./Container";
import { useTheme } from "../context/ThemeContext";

const Quote = ({ variant = "primary" }) => {
    const { getColorStyles } = useTheme();
    const colorStyles = getColorStyles(variant);

    return (
        <section id="quote" className="py-2" style={colorStyles}>
            <Container>
                <div className="p-8 md:p-16 flex flex-col items-center gap-4 text-center">
                    <img
                        fetchPriority="high"
                        decoding="async"
                        src="https://agencia2024.com.ar/wp-content/uploads/2024/10/3-1-1024x1024.png"
                        className="w-36"
                        alt=""
                        srcSet="https://agencia2024.com.ar/wp-content/uploads/2024/10/3-1-1024x1024.png 1024w, https://agencia2024.com.ar/wp-content/uploads/2024/10/3-1-300x300.png 300w, https://agencia2024.com.ar/wp-content/uploads/2024/10/3-1-150x150.png 150w, https://agencia2024.com.ar/wp-content/uploads/2024/10/3-1-768x768.png 768w, https://agencia2024.com.ar/wp-content/uploads/2024/10/3-1.png 1080w"
                        sizes="(max-width: 1024px) 100vw, 1024px"
                    />
                    <p className={`max-w-prose text-lg md:text-2xl tracking-[2px] uppercase`}>
                        No cumplo 15 todos los días… así que preparate para una noche de risas, música y mucha magia.{" "}
                        <br />
                        ¡Te espero para celebrar a lo grande!
                    </p>
                </div>
            </Container>
        </section>
    );
};

export default Quote;

import React from "react";
import Container from "./Container";
import { FaCalendarAlt, FaCheck } from "react-icons/fa";
import ButtonWithLink from "./ButtonWithLink";
import { useTheme } from "../context/ThemeContext";

const Confirmation = ({ variant = "primary" }) => {
    const { getColorStyles } = useTheme();
    const colorStyles = getColorStyles(variant);

    return (
        <section id="confirmacion" className="py-16" style={colorStyles}>
            <Container>
                <div className="flex flex-col justify-center items-center text-center gap-4">
                    <FaCalendarAlt className="text-7xl" />
                    <p className="max-w-prose text-lg">
                        Para confirmar tu asistencia, por favor completá el formulario. ¡Es súper rápido y me ayuda a
                        que todo salga perfecto!
                    </p>
                    <ButtonWithLink
                        linkUrl="https://forms.gle/ShmHPDBMSNgfDasa7"
                        text="Confirmar asistencia"
                        icon={<FaCheck />}
                        variant={variant}
                    />
                </div>
            </Container>
        </section>
    );
};

export default Confirmation;

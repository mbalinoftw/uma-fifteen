import React, { useState } from "react";
import Container from "./Container";
import { FaGift } from "react-icons/fa";
import { HiSparkles } from "react-icons/hi";
import Modal from "./Modal";
import { useTheme } from "../context/ThemeContext";

const Gift = ({ variant = "primary" }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const { getColorStyles } = useTheme();
    const colorStyles = getColorStyles(variant);

    return (
        <section id="regalo" className="py-16" style={colorStyles}>
            <Container>
                <div className="flex flex-col justify-center items-center text-center gap-4">
                    <FaGift className="text-7xl" />
                    <p className="max-w-prose text-lg">
                        Tu presencia es mi mejor regalo. Si aun así querés obsequiarme algo, te comparto mis datos. ¡Todo aporte es bienvenido!
                    </p>
                    <button
                        onClick={() => setIsModalOpen(true)}
                        style={{
                            backgroundColor: colorStyles.backgroundColor,
                            color: colorStyles.color,
                            borderColor: colorStyles.color,
                        }}
                        className="px-6 py-2 flex items-center gap-2 border rounded-full transition-all duration-300 hover:scale-105 cursor-pointer hover:opacity-90">
                        <HiSparkles />
                        <span className="text-sm uppercase tracking-wider">Hacer un regalo</span>
                    </button>
                </div>
                <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} variant={variant}>
                    <div className="">
                        <h3 className="text-center font-semibold mb-4">¡Gracias por tanto!</h3>
                        <p className="text-lg">Banco: XXX</p>
                        <p className="text-lg">Titular: XXX</p>
                        <p className="text-lg">Nro de cuenta: XXX</p>
                        <p className="text-lg">CBU: XXX</p>
                        <p className="text-lg">Alias: XXX</p>
                    </div>
                </Modal>
            </Container>
        </section>
    );
};

export default Gift;

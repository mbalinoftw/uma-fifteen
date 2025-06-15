import React, { useState, useEffect } from "react";
import Container from "./Container";
import { useTheme } from "../context/ThemeContext";

const Countdown = ({ targetDate, variant = "primary" }) => {
    const [timeLeft, setTimeLeft] = useState(new Date(targetDate));
    const { getColorStyles } = useTheme();
    const colorStyles = getColorStyles(variant);

    const getTimeLeft = ({ targetDate }) => {
        const totalTimeLeft = targetDate - new Date();
        const Días = Math.floor(totalTimeLeft / (1000 * 60 * 60 * 24));
        const Horas = Math.floor((totalTimeLeft / (1000 * 60 * 60)) % 24);
        const Minutos = Math.floor((totalTimeLeft / (1000 * 60)) % 60);
        const Segundos = Math.floor((totalTimeLeft / 1000) % 60);
        return { Días, Horas, Minutos, Segundos };
    };

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(getTimeLeft({ targetDate }));
        }, 1000);

        return () => {
            clearInterval(timer);
        };
    }, []);

    return (
        <section id="cuenta-regresiva" className="py-16" style={colorStyles}>
            <Container>
                <h2 className="text-3xl text-center mb-4">Faltan</h2>
                <div className="max-w-lg flex flex-col mx-auto">
                    <div className="grid grid-cols-4">
                        {Object.entries(timeLeft).map((el) => {
                            const label = el[0];
                            const value = el[1];
                            return (
                                <div className="flex flex-col items-center" key={label}>
                                    <div className="text-4xl md:text-5xl">
                                        <span style={colorStyles}>{value}</span>
                                    </div>
                                    <span className="text-md md:text-xl">{label}</span>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default Countdown;

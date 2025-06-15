import React from "react";
import { PiCalendarCheckBold } from "react-icons/pi";

const ConfirmationLink = () => {
    return (
        <a
            className="group px-8 py-4 flex items-center justify-center gap-4 md:max-w-lg mx-4 md:mx-auto text-white rounded-full bg-rose-500 shadow-md hover:bg-rose-600 transition-all duration-300 hover:scale-105"
            href="https://forms.gle/cVbfF5zGcBdwpYFb6"
            target="_blank"
            rel="noopener noreferrer">
            <PiCalendarCheckBold className="text-2xl md:text-3xl" />
            <span className="text-xl md:text-lg">Confirmá tu asistencia</span>
        </a>
    );
};

export default ConfirmationLink;

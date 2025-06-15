import React from "react";

const SectionTitle = ({ title, className = "" }) => {
    return (
        <h2
            className={`dancing-script-700 text-5xl md:text-6xl font-bold text-center text-neutral-500 ${className}`}>
            {title}
        </h2>
    );
};

export default SectionTitle;

import React from "react";

const SectionSubtitle = ({ subtitle, className }) => {
    return <h3 className={`text-lg text-center text-gray-600 ${className}`}>{subtitle}</h3>;
};

export default SectionSubtitle;

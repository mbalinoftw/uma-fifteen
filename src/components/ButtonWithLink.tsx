import React from "react";
import { getColorStyles } from "../theme";

interface ButtonWithLinkProps {
    linkUrl: string;
    icon?: React.ReactNode;
    text: string;
    className?: string;
    variant?: "primary" | "secondary" | "accent";
}

const ButtonWithLink = ({ linkUrl, icon, text, className, variant = "primary" }: ButtonWithLinkProps) => {
    const colorStyles = getColorStyles(variant);

    return (
        <a
            href={linkUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={colorStyles}
            className={`px-6 py-2 flex items-center gap-2 border rounded-full transition-all duration-300 hover:scale-105 cursor-pointer ${className}`}>
            {icon}
            <span className="text-sm uppercase tracking-wider">{text}</span>
        </a>
    );
};

export default ButtonWithLink;

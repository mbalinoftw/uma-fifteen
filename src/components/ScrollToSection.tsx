import React from "react";
import { FaArrowDown } from "react-icons/fa";

const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();

    if (href === "#") {
        window.scrollTo({ top: 0, behavior: "smooth" });
        return;
    }

    const targetId = href.substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
        const navbarHeight = 80;
        const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
        window.scrollTo({
            top: targetPosition,
            behavior: "smooth",
        });
    }
};

interface ScrollToSectionProps {
    sectionId: string;
    textColor: string;
}

const ScrollToSection = ({ sectionId, textColor }: ScrollToSectionProps) => {
    return (
        <a
            href={`#${sectionId}`}
            onClick={(e) => handleLinkClick(e, `#${sectionId}`)}
            className="mt-8 text-2xl animate-bounce duration-300 cursor-pointer">
            <FaArrowDown className={`text-2xl ${textColor}`} />
        </a>
    );
};

export default ScrollToSection;

import React, { useState, useEffect, useCallback } from "react";
import Container from "./Container";
import ThemeSelector from "./ThemeSelector";
import { useTheme } from "../context/ThemeContext";

interface NavbarProps {
    variant?: "primary" | "secondary" | "accent";
    hasThemeSelector?: boolean;
}

const Navbar = ({ variant = "primary", hasThemeSelector = false }: NavbarProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [isScrolled, setIsScrolled] = useState(false);
    const { getColorStyles } = useTheme();
    const colorStyles = getColorStyles(variant);

    const handleScroll = useCallback(() => {
        const currentScrollPos = window.pageYOffset;
        setIsScrolled(currentScrollPos > 100);
        setPrevScrollPos(currentScrollPos);
    }, [prevScrollPos]);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [handleScroll]);

    const navLinks = [
        { href: "#", title: "Inicio" },
        { href: "#cuenta-regresiva", title: "Cuenta regresiva" },
        { href: "#ubicacion", title: "Ubicación" },
        { href: "#confirmacion", title: "Confirmá tu asistencia" },
        { href: "#dress-code", title: "Dress code" },
        { href: "#musica", title: "Música" },
        { href: "#regalos", title: "Regalos" },
        { href: "#redes", title: "Redes" },
    ];

    const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        setIsOpen(false);

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

    return (
        <nav
            className={`fixed left-0 right-0 z-50 transition-all duration-300 ${
                isScrolled ? "bg-white text-gray-700" : "bg-transparent text-white"
            }`}>
            <Container>
                <div className="p-6 flex items-center justify-between">
                    <a href="/" className="dancing-script-700 text-4xl">
                        Uma
                    </a>
                    <div className="flex items-center gap-4">
                        {hasThemeSelector && <ThemeSelector />}
                        {/* Hamburger Button */}
                        <button
                            className="p-2 md:hidden rounded-md"
                            onClick={() => setIsOpen(!isOpen)}
                            aria-controls="mobile-menu"
                            aria-expanded={isOpen}>
                            <span className="sr-only">Open main menu</span>
                            {isOpen ? (
                                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            ) : (
                                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M4 6h16M4 12h16m-7 6h7"
                                    />
                                </svg>
                            )}
                        </button>
                    </div>
                    {/* Desktop Menu */}
                    <div className="hidden md:flex space-x-4">
                        {navLinks.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                onClick={(e) => handleLinkClick(e, link.href)}
                                className="hover:opacity-70 transition-opacity duration-300">
                                {link.title}
                            </a>
                        ))}
                    </div>
                </div>
            </Container>

            {/* Mobile Menu */}
            <div
                id="mobile-menu"
                className={`px-6 bg-white text-black md:hidden transition-max-height duration-500 overflow-hidden ${
                    isOpen ? "max-h-screen" : "max-h-0"
                }`}
                style={colorStyles}>
                <div className="-mt-24 pt-24 flex flex-col items-center justify-center">
                    {navLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            onClick={(e) => handleLinkClick(e, link.href)}
                            className="p-4 text-lg rounded-md transition-opacity duration-300 hover:opacity-70">
                            {link.title}
                        </a>
                    ))}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;

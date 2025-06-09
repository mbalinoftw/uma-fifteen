import React, { useState, useEffect } from "react";
import Container from "./Container";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [visible, setVisible] = useState(true);

    const handleScroll = () => {
        const currentScrollPos = window.pageYOffset;
        setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
        setPrevScrollPos(currentScrollPos);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [prevScrollPos, visible, handleScroll]);

    const navLinks = [
        { href: "#", title: "Inicio" },
        { href: "#countdown", title: "Cuenta regresiva" },
        { href: "#location", title: "Ubicación" },
        { href: "#photos", title: "Fotos" },
        { href: "#confirmation", title: "Confirmá tu asistencia" },
    ];

    return (
        <nav
            className={`fixed left-0 right-0 z-50 bg-gray-800 text-white pt-6 p-4 shadow-md transition-top duration-300 ${
                visible ? "translate-y-0" : "-translate-y-full"
            }`}>
            <Container>
                <div className="flex items-center justify-between">
                    <a href="/" className="text-2xl font-bold">
                        Luisina
                    </a>
                    {/* Hamburger Button */}
                    <button
                        className="md:hidden rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-controls="mobile-menu"
                        aria-expanded={isOpen}>
                        <span className="sr-only">Open main menu</span>
                        {isOpen ? (
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        ) : (
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h16m-7 6h7"
                                />
                            </svg>
                        )}
                    </button>
                    {/* Desktop Menu */}
                    <div className="hidden md:flex space-x-4">
                        {navLinks.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                className="text-sm hover:text-gray-300 transition-colors duration-300">
                                {link.title}
                            </a>
                        ))}
                    </div>
                </div>
            </Container>

            {/* Mobile Menu */}
            <div
                id="mobile-menu"
                className={`md:hidden pt-2 transition-max-height duration-500 ease-in-out overflow-hidden ${
                    isOpen ? "max-h-screen" : "max-h-0"
                }`}>
                <div className="flex flex-col space-y-2">
                    {navLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            className="block py-2 px-4 rounded-md hover:bg-gray-700 transition-colors duration-300">
                            {link.title}
                        </a>
                    ))}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;

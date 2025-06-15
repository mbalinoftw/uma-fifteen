import React from "react";
import { useTheme } from "../context/ThemeContext";

const ThemeSelector = () => {
    const { currentTheme, updateTheme } = useTheme();

    const themes = {
        light: {
            colors: {
                primary: {
                    background: "bg-white",
                    text: "text-gray-900",
                },
                secondary: {
                    background: "#f8f9fa",
                    text: "#333333",
                },
                accent: {
                    background: "#e9ecef",
                    text: "#495057",
                },
            },
        },
        dark: {
            colors: {
                primary: {
                    background: "#1a1a1a",
                    text: "#ffffff",
                },
                secondary: {
                    background: "#2d2d2d",
                    text: "#e0e0e0",
                },
                accent: {
                    background: "#404040",
                    text: "#cccccc",
                },
            },
        },
        primary: {
            colors: {
                primary: {
                    background: "#fff0f3",
                    text: "#590d22",
                },
                secondary: {
                    background: "#ffccd5",
                    text: "#800f2f",
                },
                accent: {
                    background: "#ffb3c1",
                    text: "#a4133c",
                },
            },
        },
        beige: {
            colors: {
                primary: {
                    background: "#f5f5dc",
                    text: "#4a4a3c",
                },
                secondary: {
                    background: "#e8e4d9",
                    text: "#5c5a4f",
                },
                accent: {
                    background: "#d4c9a8",
                    text: "#6b6349",
                },
            },
        },
    };

    const handleThemeChange = (themeName) => {
        updateTheme(themes[themeName]);
    };

    return (
        <div className="flex items-center gap-2">
            <button
                onClick={() => handleThemeChange("light")}
                className="w-6 h-6 rounded-full bg-white border border-gray-300 hover:scale-110 transition-transform cursor-pointer"
                title="Tema Claro"
            />
            <button
                onClick={() => handleThemeChange("dark")}
                className="w-6 h-6 rounded-full bg-gray-800 border border-gray-600 hover:scale-110 transition-transform cursor-pointer"
                title="Tema Oscuro"
            />
            <button
                onClick={() => handleThemeChange("primary")}
                className="w-6 h-6 rounded-full bg-pink-200 border border-pink-300 hover:scale-110 transition-transform cursor-pointer"
                title="Tema Rosa"
            />
            <button
                onClick={() => handleThemeChange("beige")}
                className="w-6 h-6 rounded-full bg-[#f5f5dc] border border-[#d4c9a8] hover:scale-110 transition-transform cursor-pointer"
                title="Tema Beige"
            />
        </div>
    );
};

export default ThemeSelector;

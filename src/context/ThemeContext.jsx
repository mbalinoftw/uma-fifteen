import React, { createContext, useContext, useState } from "react";
import { theme as defaultTheme } from "../theme";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [currentTheme, setCurrentTheme] = useState(defaultTheme);

    const getColorStyles = (variant = "primary") => {
        const colorSet = currentTheme.colors[variant] || currentTheme.colors.primary;
        return {
            backgroundColor: colorSet.background,
            color: colorSet.text,
        };
    };

    const updateTheme = (newTheme) => {
        setCurrentTheme((prevTheme) => ({
            ...prevTheme,
            colors: {
                ...prevTheme.colors,
                ...newTheme.colors,
            },
        }));
    };

    return (
        <ThemeContext.Provider value={{ currentTheme, getColorStyles, updateTheme }}>{children}</ThemeContext.Provider>
    );
};

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error("useTheme must be used within a ThemeProvider");
    }
    return context;
};

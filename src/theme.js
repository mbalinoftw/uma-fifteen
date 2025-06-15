export const theme = {
    colors: {
        primary: {
            background: "bg-white",
            text: "text-gray-800",
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
};

// Función helper para obtener los estilos de color
export const getColorStyles = (variant = "primary") => {
    const colorSet = theme.colors[variant] || theme.colors.primary;
    return {
        backgroundColor: colorSet.background,
        color: colorSet.text,
    };
};

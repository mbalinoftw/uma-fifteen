import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
    plugins: [react(), tailwindcss()],
    define: {
        VITE_APP_TITLE: JSON.stringify(metadata.title),
        VITE_APP_DESCRIPTION: JSON.stringify(metadata.description),
        VITE_APP_IMAGE: JSON.stringify(metadata.url + metadata.image),
        VITE_APP_URL: JSON.stringify(metadata.url),
    },
});

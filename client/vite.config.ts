import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        svgr({
            svgrOptions: {
                exportType: "default",
            },
        }),
        react(),
    ],
    server: {
        watch: {
            usePolling: true,
        },
        host: true, // Here
        strictPort: true,
        port: 8080,
    },
});

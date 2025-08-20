import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000, // Default port for Vite
    host: true, // Allow access from other devices on the network
    open: true, // Automatically open the browser when the server starts
  },
});

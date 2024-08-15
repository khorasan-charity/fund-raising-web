import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import checker from "vite-plugin-checker";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
	resolve: {
		alias: {
			"@": path.resolve(__dirname, "./src"),
			"@assets": path.resolve(__dirname, "./src/assets"),
			"@ui": path.resolve(__dirname, "./src/ui"),
		},
	},
	plugins: [
		react(),
		checker({
			typescript: true,
		}),
	],
	publicDir: "assets",
	server: {
		host: "0.0.0.0",
	},
});

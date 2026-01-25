// @ts-check
import alpinejs from "@astrojs/alpinejs";
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
    integrations: [
        icon({ iconDir: "src/assets/icons" }),
		alpinejs({ entrypoint: "/src/alpine.js" }),
    ],
    vite: {
        preview: {
            allowedHosts: ["teacercamoselmundo-frontend-9xbkdz-102529-209-38-71-121.traefik.me"],
        },
        server: {
            allowedHosts: ["teacercamoselmundo-frontend-9xbkdz-102529-209-38-71-121.traefik.me"],
        },
        plugins: [tailwindcss()],
    },
});

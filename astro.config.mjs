// @ts-check
import alpinejs from "@astrojs/alpinejs";
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";

import icon from "astro-icon";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
    site: "https://teacercamoselmundo.pe",
    redirects: {
        "/experiencias-globales": "/tu-puente-al-mundo",
    },
    integrations: [
        icon({ iconDir: "src/assets/icons" }),
        // Excluye las vistas del globo: /mapa-embed/ es solo para el iframe (noindex)
        // y /mapa-interactivo/ duplica el mapa de /ruta-internacional/.
        sitemap({ filter: (page) => !/\/mapa-(embed|interactivo)\//.test(page) }),
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

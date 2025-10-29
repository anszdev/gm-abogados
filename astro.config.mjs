// @ts-check
import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";

import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
  site: "https://gm-abogados.com.mx",
  integrations: [
    react(),
    sitemap({
      // Personalización opcional
      changefreq: "weekly",
      priority: 1.0,
      lastmod: new Date(),

      // Incluir secciones con anchors
      customPages: [
        "https://gm-abogados.com.mx/",
        "https://gm-abogados.com.mx/#do-you-indentify",
        "https://gm-abogados.com.mx/#services",
        "https://gm-abogados.com.mx/#faq",
        "https://gm-abogados.com.mx/#success-stories",
        "https://gm-abogados.com.mx/#contact",
      ],
    }),
  ],
  output: "server",
  adapter: netlify(),
});

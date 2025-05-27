import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { ManifestOptions, VitePWA } from "vite-plugin-pwa";
import path from 'path';

const manifest: Partial<ManifestOptions> | false = {
  theme_color: "#8936FF",
  background_color: "#2EC6FE",
  icons: [
    {
      purpose: "maskable",
      sizes: "512x512",
      src: "icon512_maskable.png",
      type: "image/png",
    },
    {
      purpose: "any",
      sizes: "512x512",
      src: "icon512_rounded.png",
      type: "image/png",
    },
  ],
  screenshots: [
    {
      src: "/screenshots/desktop.png",
      type: "image/png",
      sizes: "1919x967",
      form_factor: "wide",
    },
    {
      src: "/screenshots/mobile.png",
      type: "image/png",
      sizes: "454x814",
      form_factor: "narrow",
    },
  ],
  orientation: "any",
  display: "standalone",
  lang: "ru-RU",
  name: "TradeWise",
  short_name: "TradeWise",
};

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      workbox: {
        globPatterns: ["**/*.{html,css,js,ts,tsx,ico,png,svg}"],
      },
      manifest: manifest,
    }),
  ],
  resolve: {
    alias: {
      // Base aliases
      '@': path.resolve(__dirname, './src'),
      '@app': path.resolve(__dirname, './src/app'),
      '@features': path.resolve(__dirname, './src/features'),
      '@shared': path.resolve(__dirname, './src/shared'),
      '@pages': path.resolve(__dirname, './src/pages'),
      '@assets': path.resolve(__dirname, './src/assets'),
      
      // Detailed aliases
      '@ui': path.resolve(__dirname, './src/shared/ui'),
      '@constants': path.resolve(__dirname, './src/shared/constants'),
      '@hooks': path.resolve(__dirname, './src/shared/hooks'),
      '@services': path.resolve(__dirname, './src/shared/api'),
      '@store': path.resolve(__dirname, './src/app/store'),
    }
  }
});

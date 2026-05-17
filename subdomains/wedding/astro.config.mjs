import { defineConfig } from 'astro/config';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  output: 'static',
  vite: {
    plugins: [
      VitePWA({
        registerType: 'autoUpdate',
        includeAssets: ['favicon.svg'],
        manifest: {
          name: 'Funda Çiçek Wedding - Bursa Özel Gelinlik',
          short_name: 'Funda Çiçek',
          description: 'Bursa özel gelinlik dikim, kiralama ve satış. Hayallerinizi giydiriyoruz.',
          theme_color: '#c77d9e',
          background_color: '#ffffff',
          display: 'standalone',
          start_url: '/',
          icons: [
            {
              src: '/icon-192.png',
              sizes: '192x192',
              type: 'image/png'
            },
            {
              src: '/icon-512.png',
              sizes: '512x512',
              type: 'image/png'
            }
          ]
        },
        workbox: {
          globPatterns: ['**/*.{js,css,html,png,webp,svg}']
        }
      })
    ]
  }
});

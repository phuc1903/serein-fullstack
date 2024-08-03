import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';


export default defineConfig({
    plugins: [
        react(),
        laravel({
            input: [
                'resources/js/app.jsx',
                'resources/css/app.css',
                'public/fontawesome-free-6.2.1-web/fontawesome-free-6.2.1-web/css/all.min.css'
            ],
            refresh: true,
        }),
    ],
    resolve: {
        alias: {
            '@': '/resources/js',
            'V': '/vendor',
        }
    }
});

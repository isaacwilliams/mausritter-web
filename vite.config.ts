/// <reference types="vitest" />
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vitest/config';
import vike from 'vike/plugin';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
    plugins: [
        vike({}),
        react({
            babel: {
                plugins: ['styled-components'],
                babelrc: false,
                configFile: false,
            },
        }),
        svgr(),
    ],
    build: {
        target: 'es2022',
    },
    test: {
        globals: true,
        environment: 'jsdom',
        setupFiles: './src/test/setup.ts',
    },
});

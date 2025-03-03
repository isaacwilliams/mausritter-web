import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import vike from 'vike/plugin';

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
    ],
    build: {
        target: 'es2022',
    },
});

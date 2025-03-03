import vikeReact from 'vike-react/config';
import type { Config } from 'vike/types';

// Default config (can be overridden by pages)
// https://vike.dev/config

export default {
    // https://vike.dev/head-tags
    title: 'Mausritter',
    description: 'Demo showcasing Vike',

    extends: vikeReact,
    prerender: true,
} satisfies Config;

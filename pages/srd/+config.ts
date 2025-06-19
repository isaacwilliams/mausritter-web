import vikeReact from 'vike-react/config';
import type { Config } from 'vike/types';

// Default config (can be overridden by pages)
// https://vike.dev/config

export default {
    // https://vike.dev/head-tags
    title: 'Game Rules | Mausritter',
    description: `The Mausritter SRD is a complete, free, and open-source reference for the Mausritter, the sword-and-whiskers roleplaying game.`,

    extends: vikeReact,
    prerender: true,
} satisfies Config;

import vikeReact from 'vike-react/config';
import type { Config } from 'vike/types';

// Default config (can be overridden by pages)
// https://vike.dev/config

export default {
    // https://vike.dev/head-tags
    title: 'Mausritter',
    description:
        'Take up the sword and don the whiskers of a brave mouse adventurer in Mausritter, the rules-light fantasy adventure roleplaying game.',

    extends: vikeReact,
    prerender: true,
} satisfies Config;

const resources = [
    {
        name: 'Queasy Quarry Quest',
        author: 'imnotsupposedtogetjigsinit',
        link: 'https://notsupposedtogetjigs.itch.io/queasy-quarry-quest',
        image: require('./images/adventure-qqq.jpg'),
        className: 'shadow',
        releaseDate: '2021-09-11',
    },
    {
        name: 'Bernpyle #6 — Into the Veins of the Earth',
        author: 'ManaRampMatt',
        link: 'https://manarampmatt.itch.io/bernpyle-6-into-the-veins-of-the-earth',
        image: require('./images/adventure-bernpyle-6.png'),
        className: 'shadow',
        releaseDate: '2021-07-23',
    },
    {
        name: 'The Vitacernis',
        author: 'Brian Stauffer',
        link: 'https://brstf.itch.io/the-vitacernis',
        image: require('./images/adventure-vitacernis.png'),
        className: 'shadow',
        releaseDate: '2021-05-11',
    },
    {
        name: 'Alchemy',
        author: 'Fortune Trove',
        link: 'https://fortunetrove.itch.io/alchemy-supplement',
        image: require('./images/adventure-alchemy.png'),
        className: 'shadow',
        releaseDate: '2021-07-06',
    },
    {
        name: 'Mayfield',
        author: 'Various',
        link: 'https://manarampmatt.itch.io/mayfield',
        image: require('./images/adventure-mayfield.jpg'),
        className: 'shadow',
        releaseDate: '2021-06-26',
    },
    {
        name: 'Chimneyhaus',
        author: 'James Hanna',
        link: 'https://feylightstudio.com/product/chimneyhaus/',
        image: require('./images/adventure-chimneyhaus.jpg'),
        className: 'shadow',
        releaseDate: '2021-06-25',
    },
    {
        name: 'Stoneford',
        author: 'Juan Carlos Hernández',
        link: 'https://imsobadatnicknames.itch.io/stoneford-a-location-for-mausritter',
        image: require('./images/adventure-stoneford.png'),
        className: 'shadow',
        releaseDate: '2021-02-28',
    },
    {
        name: 'Tales from Moonshore',
        author: 'Lux, Paige & ManaRampMatt',
        link: 'https://manarampmatt.itch.io/tales-from-moonshore',
        image: require('./images/adventure-moonshore.png'),
        className: 'shadow',
        releaseDate: '2021-02-27',
    },
    {
        name: 'Mouse Supplements',
        author: 'Gray Moth',
        link: 'https://graymoth.itch.io/mousesupplements',
        image: require('./images/adventure-mouse-supplements-min.png'),
        className: 'shadow',
        releaseDate: '2021-02-12',
    },
    {
        name: 'A Ghostly Tail',
        author: 'Ross Burton',
        link: 'https://rossburton.itch.io/a-ghostly-tail',
        image: require('./images/adventure-ghostly-tail.png'),
        className: 'shadow',
        releaseDate: '2021-01-13',
    },
    {
        name: 'Lost Mines of Salt Pine',
        author: 'ekobor',
        link: 'https://ekobor.itch.io/lost-mines-of-salt-pine',
        image: require('./images/adventure-lost-mines-saltmarsh.png'),
        className: 'shadow',
        releaseDate: '2021-02-09',
    },
    {
        name: 'Bernpyle #3',
        author: 'ManaRampMatt',
        image: require('./images/adventure-bernpyle-3-min.png'),
        link: 'https://manarampmatt.itch.io/bernpyle-issue-3',
        className: 'shadow',
        releaseDate: '2021-02-06',
    },
    {
        name: 'Belladonna’s Botannicals',
        author: 'Juan Carlos Hernández',
        link: 'https://imsobadatnicknames.itch.io/belladonnas-botannicals',
        image: require('./images/adventure-botanicals.png'),
        className: 'shadow',
        releaseDate: '2021-02-09',
    },
    {
        name: 'Zauberei’s Grim Grimoire',
        author: 'Greyson Yandt',
        link: 'https://greysonwhy.itch.io/zaubereis-grim-grimoire',
        image: require('./images/adventure-grim-grimoire.png'),
        className: 'shadow',
        releaseDate: '2021-01-17',
    },
    {
        name: 'The Woodshed',
        author: 'smcabrera & ekobor',
        link: 'https://ekobor.itch.io/the-woodshed',
        image: require('./images/adventure-the-woodshed.png'),
        className: 'shadow',
        releaseDate: '2021-01-16',
    },
    {
        name: 'The Library War: Queen’s Quest',
        author: 'Josh Domanski',
        image: require('./images/adventure-library-war.png'),
        link: 'https://unenthuser.itch.io/the-library-war-queens-quest',
        className: 'shadow',
        releaseDate: '2020-12-28',
    },
    {
        name: 'Fort Ploddy',
        author: 'Harrison Swift',
        image: require('./images/adventure-ploddy.png'),
        link: 'https://glaucus.itch.io/fort-ploddy',
        className: 'shadow',
        releaseDate: '2020-12-28',
    },
    {
        name: 'MausRatos #1',
        author: '@mausratos',
        image: require('./images/adventure-mausratos.png'),
        link: 'https://mausratosbr.itch.io/mausratos1',
        className: 'shadow',
        releaseDate: '2020-12-25',
    },
    {
        name: 'A not so Stille Nacht',
        author: 'ManaRampMatt',
        image: require('./images/adventure-still-night.png'),
        link: 'https://manarampmatt.itch.io/silentnight',
        className: 'shadow',
        releaseDate: '2020-12-17',
    },
    {
        name: 'Bernpyle #2',
        author: 'ManaRampMatt',
        link: 'https://manarampmatt.itch.io/bernpyleissue2',
        image: require('./images/adventure-bernpyle-2.png'),
        className: 'shadow',
        releaseDate: '2020-12-02',
    },
    {
        name: 'Thistle Kingdom #2: Winter',
        author: 'Christopher Käck',
        image: require('./images/adventure-thistle-kingdom-2.png'),
        link: 'https://kejsarmakten.itch.io/thistle-kingdom-2',
        className: 'shadow',
        releaseDate: '2020-12-14',
    },
    {
        name: 'Bestiarium',
        author: 'ManaRampMatt & Mausritter Discord',
        link: 'https://manarampmatt.itch.io/beastiarium-mausritter',
        image: require('./images/adventure-beastarium.png'),
        className: 'shadow',
        releaseDate: '2020-12-29',
    },
    {
        name: 'Bernpyle #1',
        author: 'ManaRampMatt',
        link: 'https://manarampmatt.itch.io/bernpyle-an-unofficial-mausritter-zine',
        image: require('./images/adventure-burrow.png'),
        className: 'shadow',
        releaseDate: '2020-10-26',
    },
    {
        name: 'Lake of the Pirat King',
        author: 'Cameron Donnelly & Richard Davis',
        link: 'https://justafatyeti.itch.io/lake-of-the-pirat-king',
        image: require('./images/adventure-lake-pirat.png'),
        className: 'shadow',
        releaseDate: '2020-10-26',
    },
    {
        name: 'Stonewall',
        author: 'Cameron Donnelly & Richard Davis',
        image: require('./images/adventure-stonewall.png'),
        link: 'https://justafatyeti.itch.io/stonewall',
        className: 'shadow',
        releaseDate: '2020-10-29',
    },
    {
        name: 'Thistle Kingdom #1: Summer',
        author: 'Christopher Käck',
        image: require('./images/adventure-thistle-kingdom-1.png'),
        link: 'https://kejsarmakten.itch.io/thistle-kingdom-1',
        className: 'shadow',
        releaseDate: '2020-09-11',
    },
];

export default resources;

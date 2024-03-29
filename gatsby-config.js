module.exports = {
    siteMetadata: {
        title: `Mausritter`,
        description: `Take up the sword and don the whiskers of a brave mouse adventurer in Mausritter, the rules-light fantasy adventure roleplaying game.`,
        author: `@isaacwilliams`,
        siteUrl: 'https://mausritter.com',
        social: {
            twitter: `mausritter`,
        },
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `${__dirname}/content/srd-markdown`,
                name: `srd-markdown`,
            },
        },
        {
            resolve: `gatsby-transformer-remark`,
            options: {
                plugins: [
                    {
                        resolve: `gatsby-remark-autolink-headers`,
                    },
                ],
            },
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        `gatsby-plugin-styled-components`,
    ],
};

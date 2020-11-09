module.exports = {
  siteMetadata: {
    title: `Mausritter`,
    description: `Take up the sword and don the whiskers of a brave mouse adventurer in Mausritter, the rules-light fantasy adventure roleplaying game.`,
    author: `@isaacwilliams`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
        resolve: `gatsby-source-filesystem`,
        options: {
            path: `${__dirname}/src/srd-markdown`,
            name: `srd-markdown`,
        },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-autolink-headers`,
            options: {
              icon:  null,
            },
          },
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
  ],
}

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

const myCustomQueries = {
  lg: "(min-width: 1024px)",
}

module.exports = {
  siteMetadata: {
    title: "Corpus - Fisioterapia & Pilates",
    description: `Aulas de pilates e atendimento de fisioterapia clínica em Brasília. Fisioterapia ortopédica (atendemos com o Método McKenzie de terapia mecânica), uroginecológica e pélvica.`,
    author: `@etercomunicacao`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `rubik\:200,200i,300,300i,400,400i,,600,600i,700, 700i`,
          `Open+Sans\:300,300i,400,400i,700, 700i`,
        ],
        display: "swap",
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.SPACE_ID, // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: process.env.DELIVERY_API_KEY,
        downloadLocal: true,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-corpus-default`,
        short_name: `corpusfp`,
        start_url: `/`,
        background_color: `#004466`,
        theme_color: `#004466`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-background-image-es5",
      options: {
        // add your own characters to escape, replacing the default ':/'
        specialChars: ":/",
      },
    },
    {
      resolve: "gatsby-plugin-breakpoints",
      options: {
        queries: myCustomQueries,
      },
    },
    `gatsby-plugin-typescript`,
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        postCssPlugins: [
          require("tailwindcss"),
          require("./tailwind.config.js"),
        ],
      },
    },

    //{
    //  resolve: `gatsby-plugin-create-client-paths`,
    //  options: { prefixes: [`/app/*`] },
    //}
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}

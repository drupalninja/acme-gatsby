// Load environment variables from a .env file into process.env.
// Check out https://www.gatsbyjs.org/docs/environment-variables/ for more.
require("dotenv").config({
  path: `.env`
});

module.exports = {
  siteMetadata: {
    title: `Gatsby Rain Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This assumes you have the RAIN distribution up and running.`,
    author: `@mediacurrent`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        includePaths: ["node_modules", "src/global"]
      }
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-rain`,
        short_name: `rain`,
        start_url: `/`,
        background_color: `#eee`,
        theme_color: `#eee`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-drupal`,
      options: {
        baseUrl: process.env.BASE_URL,
        apiBase: `jsonapi` // optional, defaults to `jsonapi`
      }
    },
    `gatsby-source-rain`
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}

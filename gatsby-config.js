require(`dotenv`).config({
    path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  pathPrefix: "/",
  siteMetadata: {
    title: `Ramboll-360MP-viewer`,
    description: `360-viewer of MP scans..`,
    author: `Lukasz Wiszniewski`,
    apiUrl: process.env.API_URL,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
      {
          resolve: `gatsby-plugin-google-analytics`,
          options: {
              // The property ID; the tracking code won't be generated without it
              trackingId: "UA-170631170-1",
              // Defines where to place the tracking script - `true` in the head and `false` in the body
              head: true,
          },
      },
      {
          resolve: `gatsby-source-airtable`,
          options: {
              apiKey: process.env.AIRTABLE_API_KEY,
              tables: [
                  {
                      baseId: process.env.AIRTABLE_BASE_ID,
                      tableName: process.env.AIRTABLE_TABLE_NAME,
                      //tableView: `Grid view`,
                  },
              ]
          }
      },
      {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-plugin-sass`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-react-bootstrap`,
        short_name: `react-bootstrap`,
        start_url: `/`,
        background_color: `#20232a`,
        theme_color: `#20232a`,
        display: `minimal-ui`,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};

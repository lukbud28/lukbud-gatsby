const path = require("path")

module.exports = {
  siteMetadata: {
    title: `Lukbud gatsby site`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `Igor Patro`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        // icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-plugin-root-import",
      options: {
        src: path.join(__dirname, "src"),
        pages: path.join(__dirname, "src/pages"),
        components: path.join(__dirname, "src/components"),
        layout: path.join(__dirname, "src/layout"),
        assets: path.join(__dirname, "src/assets"),
        images: path.join(__dirname, "src/assets/images"),
      },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Poppins`,
            subsets: [`latin-ext`],
            variants: [
              `400`,
              `500`,
              `600`,
              `700`,
              `400i`,
              `500i`,
              `600i`,
              `700i`,
            ],
          },
          {
            family: `Lora`,
            subsets: [`latin-ext`],
            variants: [
              `400`,
              `500`,
              `600`,
              `700`,
              `400i`,
              `500i`,
              `600i`,
              `700i`,
            ],
          },
        ],
      },
    },
  ],
}

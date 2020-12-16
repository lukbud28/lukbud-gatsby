const path = require("path")

module.exports = {
  siteMetadata: {
    title: `Lukbud gatsby site`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `Igor Patro`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-transition-link`,
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
        name: `lukbud-gatsby`,
        short_name: `lukbud`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#ffffff`,
        display: `minimal-ui`,
        icon: `src/assets/icons/instagram.svg`,
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
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        google: {
          families: ["Poppins", "Lora"],
        },
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /svg/,
        },
      },
    },
    {
      resolve: "gatsby-plugin-firebase",
      options: {
        credentials: {
          apiKey: "AIzaSyBBc-_Zr_sbgskEHk5WdNByD81diWklYoU",
          authDomain: "lukbud-gatsby.firebaseapp.com",
          projectId: "lukbud-gatsby",
          storageBucket: "lukbud-gatsby.appspot.com",
          messagingSenderId: "715440523262",
          appId: "1:715440523262:web:0670b355f3c02e3e3ee2af",
          measurementId: "G-TLC8NZJ0RE",
        },
      },
    },
  ],
}

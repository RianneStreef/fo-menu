require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "fo-menu",
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: ["G-ZZDV8FZKTE"],
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: true,
        },
        // defaults to false
        enableWebVitalsTracking: true,
        // Setting this parameter is also optional
        respectDNT: true,
      },
    },
    {
      resolve: "gatsby-source-contentful",
      options: {
        accessToken: "s9DGj8OQF66K7HgKXspXEopmvURH7JrpYTse_1N7CDQ",
        spaceId: "pzdpncb7lli5",
      },
    },
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Quicksand\:300, 400, 500`,
          `source sans pro\:300,400,400i,700`, // you can also specify font weights and styles
        ],
        display: "swap",
      },
    },
  ],
};

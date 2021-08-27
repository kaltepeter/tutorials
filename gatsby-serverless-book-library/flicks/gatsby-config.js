require('dotenv').config();

module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "flicks",
  },
  plugins: [
    "gatsby-plugin-styled-components",
    "gatsby-plugin-gatsby-cloud",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
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
      resolve: `gatsby-source-harperdb`,
      options: {
        secret: process.env.HARPER_DB_SECRET_KEY,
        url: process.env.HARPER_DB_URL,
        payload: {
          "operation": "sql",
          "sql":"SELECT * FROM library.book"
        },
        type: "books"
      },
    },
  ],
};

require('dotenv').config();

module.exports = {
  siteMetadata: {
    title: 'Frédéric Paurisse',
    description: 'Développeur web full stack',
    author: 'Frédéric Paurisse',
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-prefetch-google-fonts',
      options: {
        fonts: [
          {
            family: 'Open Sans',
            variants: ['400', '800'],
          },
        ],
      },
    },
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-rest-api',
      options: {
        endpoints: [
          `${process.env.GATSBY_API_URL}api/v1/works`,
        ],
      },
    },
  ],
};

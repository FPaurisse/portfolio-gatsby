require('dotenv').config();

module.exports = {
  siteMetadata: {
    title: 'Frédéric Paurisse | Creative developer',
    description: 'Developpeur web et webdesigner freelance à Tours (37), je développe pour vous tout type de projet web et print : sites internet, applications web, identités visuelles et chartes graphiques.',
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

require('dotenv').config();

module.exports = {
  siteMetadata: {
    title: 'Frédéric Paurisse',
    description: "Vous recherchez un développeur web indépendant à Tours (37) ? Avec de l'expérience et une expertise full stack ? vous tombez très bien.",
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

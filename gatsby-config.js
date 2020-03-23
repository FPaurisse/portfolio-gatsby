require('dotenv').config();

module.exports = {
  siteMetadata: {
    title: 'Frédéric Paurisse | Creative developer',
    description: 'Développeur web et webdesigner freelance à Tours (37), je développe pour vous tout type de projets web et print : sites internet, applications web, identités visuelles et chartes graphiques.',
    author: 'Frédéric Paurisse',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-postcss',
      options: {
        postCssPlugins: [
          // eslint-disable-next-line global-require
          require('postcss-preset-env')({
            autoprefixer: { grid: true },
            features: {
              'nesting-rules': true,
            },
          }),
        ],
      },
    },
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

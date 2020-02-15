module.exports = {
  siteMetadata: {
    title: `Frédéric Paurisse`,
    description: `Développeur web full stack`,
    author: `Frédéric Paurisse`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: 'gatsby-source-rest-api',
      options: {
        endpoints: [
          'http://localhost:3001/api/v1/works'
        ],
      },
    },
  ],
}

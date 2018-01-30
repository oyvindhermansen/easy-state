module.exports = {
  pathPrefix: '/easy-state',
  siteMetadata: {
    title: 'Easy State'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/markdown`,
        name: 'markdown'
      }
    },
    'gatsby-transformer-remark'
  ]
};

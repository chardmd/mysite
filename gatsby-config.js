module.exports = {
  siteMetadata: {
    title: 'Richard Dimalanta',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-netlify',
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-117945705-1',
        // Puts tracking script in the head instead of the body
        head: false,
      },
    },
  ],
}

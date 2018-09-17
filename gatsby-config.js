module.exports = {
  siteMetadata: {
    title: `Richard Dimalanta`,
    about: `Richard is skilled in building SaaS solutions using high
    performance web technologies. He has wide range of experience
    in various industries across multiple countries such as
    Singapore, Philippines, and currently Australia. He always aim
    to build services that makes people's lives better.`,
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-117945705-1',
        // Puts tracking script in the head instead of the body
        head: false,
      },
    },
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        navigateFallback: null,
        navigateFallbackWhitelist: [],
      },
    },
    'gatsby-plugin-netlify',
  ],
}

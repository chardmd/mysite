module.exports = {
  siteMetadata: {
    headline: `Richard Dimalanta`,
    about: `Richard is skilled in building SaaS solutions using high
    performance web technologies. He has a wide range of experience
    in the tech industry and have worked across multiple countries such as
    Singapore, Philippines, and currently Australia. He always aim
    to build services that makes people's lives better.`,
    title: 'Richard Dimalanta. Maker of Things',
    description: 'Maker of Things. SaaS, Full Stack. Web Development',
    url: 'https://www.chardmd.com',
    twitter: '@iamchardmd',
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
    'gatsby-plugin-offline',
    'gatsby-plugin-netlify',
  ],
}

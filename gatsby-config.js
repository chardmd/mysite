module.exports = {
  siteMetadata: {
    headline: `Richard Dimalanta`,
    about: `Richard is skilled in building web-apps (SaaS) using high performance web technologies. He accumulated a wide range of experience
    working across global businesses and have gained international exposure living in Australia, Singapore, and the Philippines. 
    His skills in software development can bring significant value to the team and positive ROI to your organization. 
    He will help you build software that solves business problems, increase revenue or reduce costs.`,
    title: 'Richard Dimalanta. Maker of Things',
    description: 'Maker of Things. SaaS, Full Stack. Web Development',
    url: 'https://www.chardmd.com',
    twitter: '@iamchardmd',
    driftId: 'nzed2gc9n3vk',
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
    'gatsby-plugin-styled-components',
  ],
}

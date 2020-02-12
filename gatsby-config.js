module.exports = {
  siteMetadata: {
    headline: `Richard M. Dimalanta`,
    about: `Richard is skilled in building web-apps (SaaS) using high cutting-edge technologies. 
    He has been developing enterprise applications and distributed systems since 2011 and 
    has gained a lot of experience working across global businesses. His skills in software development 
    can bring significant value to the team and positive ROI to your organization. 
    He has built and designed business software consisting of microservices, 
    service-oriented, monolith, and serverless architecture. 
    He will help you build software that increases the business' revenue / reduce costs.`,
    title: 'Richard M. Dimalanta. Maker of Things',
    description: 'Maker of Things. SaaS, Full Stack. Web Development',
    url: 'https://www.chardmd.com',
    twitter: '@iamchardmd',
    driftId: 'nzed2gc9n3vk',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-hotjar`,
      options: {
        id: 1685806,
        sv: 6
      },
    },
    'gatsby-plugin-offline',
    'gatsby-plugin-netlify',
    'gatsby-plugin-styled-components',
  ],
}

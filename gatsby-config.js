"use strict";

const siteConfig = require("./config.js");

module.exports = {
  siteMetadata: {
    title: siteConfig.title,
    siteUrl: siteConfig.siteUrl,
    description: siteConfig.description,
    author: siteConfig.author,
    copyright: siteConfig.copyright,
    policyDate: siteConfig.policyDate,
    email: siteConfig.email,
    headline: siteConfig.headline,
    twitter: siteConfig.twitter,
    driftId: siteConfig.driftId,
  },
  plugins: [
    // This plugin exposes helper functions for processing
    // images with the NPM package “sharp”. It's used by
    // several other plugins.
    "gatsby-plugin-sharp",
    // This plugin identifies file nodes that are images and
    // transforms these to create new “ImageSharp” nodes.
    // With them you can resize images and
    // generate responsive image thumbnails.
    "gatsby-transformer-sharp",
    // This plugin takes your configuration and generates a
    // web manifest file so the site can be added to your
    // homescreen on Android.
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: siteConfig.title,
        short_name: siteConfig.title,
        start_url: "/",
        background_color: "#f7f7f7",
        theme_color: "#191919",
        display: "minimal-ui",
        icon: "src/assets/logo.png",
      },
    },
    // configure node-saas
    "gatsby-plugin-sass",
    // intercepts all local links that have not been created in React using gatsby-link
    "gatsby-plugin-catch-links",
    // This plugin generates a service worker and AppShell
    // html file so the site works offline and is otherwise
    // resistant to bad networks. Works with almost any
    // site!
    "gatsby-plugin-offline",
    // This plugin sets up gTag for you.
    {
      resolve: "gatsby-plugin-google-gtag",
      options: {
        trackingIds: [siteConfig.googleAnalyticsId],
        pluginConfig: {
          head: true,
        },
      },
    },
    // configure site fonts
    {
      resolve: "gatsby-plugin-typography",
      options: {
        pathToConfigModule: "src/utils/typography",
      },
    },
    // Create a sitemap for your Gatsby site
    // (only runs on production - yarn run buid && gatsby serve)
    {
      resolve: "gatsby-plugin-sitemap",
      options: {
        query: `
          {
            site {
              siteMetadata {
                siteUrl
              }
            }
            allSitePage(
              filter: {
                path: { regex: "/^(?!/404/|/404.html|/dev-404-page/)/" }
              }
            ) {
              edges {
                node {
                  path
                }
              }
            }
          }
        `,
        output: "/sitemap.xml",
        serialize: ({ site, allSitePage }) =>
          allSitePage.edges.map((edge) => ({
            url: site.siteMetadata.siteUrl + edge.node.path,
            changefreq: "daily",
            priority: 0.7,
          })),
      },
    },
    // youtube like progress when loading pages
    {
      resolve: "gatsby-plugin-nprogress",
      options: {
        // Setting a color is optional.
        color: "tomato",
        // Disable the loading spinner.
        showSpinner: false,
      },
    },
    // add seo tags
    "gatsby-plugin-react-helmet",
    // Create robots.txt
    "gatsby-plugin-robots-txt",
    // Automatically generates a _headers file and a _redirects file
    // at the root of the public folder to configure HTTP headers and redirects on Netlify.
    "gatsby-plugin-netlify",
  ],
};

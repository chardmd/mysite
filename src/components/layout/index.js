import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Drift from 'react-driftjs'
import { StaticQuery, graphql } from 'gatsby'
import 'animate.css'

import About from '../About'
import logo from '../../assets/logo.png'
import './index.css'
import { Main, Section } from './styles'

const Layout = ({ children, location }) => (
  <StaticQuery
    query={graphql`
      query LayoutQuery {
        site {
          siteMetadata {
            title
            url
            description
            twitter
            driftId
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          titleTemplate={`%s | ${data.site.siteMetadata.title}`}
          defaultTitle={data.site.siteMetadata.title}
        >
          <link rel="icon" href={logo} />

          {/* General tags */}
          <meta
            name="description"
            content={data.site.siteMetadata.description}
          />
          <meta name="image" content={logo} />

          {/* OpenGraph tags */}
          <meta property="og:url" content={data.site.siteMetadata.url} />
          <meta property="og:title" content={data.site.siteMetadata.title} />
          <meta property="og:description" content="" />
          <meta property="og:image" content={logo} />
          <meta property="fb:app_id" content="" />

          {/* Twitter Card tags */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta
            name="twitter:creator"
            content={data.site.siteMetadata.twitter}
          />
          <meta name="twitter:title" content={data.site.siteMetadata.title} />
          <meta name="twitter:description" content="" />
          <meta name="twitter:image" content={logo} />
        </Helmet>
        <Main>
          <Section>
            <About location={location} />
          </Section>
          <Section>{children}</Section>
          <Drift appId={data.site.siteMetadata.driftId} />
        </Main>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.object,
}

export default Layout

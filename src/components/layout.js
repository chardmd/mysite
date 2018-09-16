import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import 'animate.css'

import About from '../components/About'
import logo from '../assets/logo.png'
import './index.css'

const Layout = ({ children, location }) => (
  <StaticQuery
    query={graphql`
      query LayoutQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          titleTemplate={`%s | ${data.site.siteMetadata.title}`}
          defaultTitle={data.site.siteMetadata.title}
          meta={[
            {
              name: 'description',
              content: 'Full Stack Developer based in Sydney, Australia',
            },
            {
              name: 'keywords',
              content:
                'Javascript,React,Node.js,React.js,AWS,Azure,.Net Core,Docker,Sydney,Australia,AU,IT,Full Stack Developer,Richard Dimalanta',
            },
          ]}
        >
          <link rel="icon" href={logo} />
          <script
            async
            src="https://platform.twitter.com/widgets.js"
            charset="utf-8"
          />
        </Helmet>
        <main>
          <section>
            <About location={location} />
          </section>
          <section>{children}</section>
        </main>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.object,
}

export default Layout

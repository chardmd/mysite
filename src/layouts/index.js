import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import 'animate.css'

import About from '../components/About'
import logo from '../assets/logo.png'
import './index.css'

const Layout = ({ children, data, location }) => (
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        {
          name: 'description',
          content: 'Software Engineer based in Sydney, Australia',
        },
        {
          name: 'keywords',
          content:
            'Javascript,React,Angular,Vue,Typescript,Node.js,React.js,ES6',
        },
      ]}
    >
      <link rel="icon" href={logo} />
    </Helmet>

    <main>
      <section>
        <About location={location} />
      </section>
      <section>{children()}</section>
    </main>
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`

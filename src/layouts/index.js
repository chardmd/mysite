import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import About from '../components/About'

import logo from '../assets/logo.png'

import './index.css'

const Layout = ({ children, data }) => (
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
            'Skilled in building SaaS solutions using high performance web technologies.',
        },
      ]}
    >
      <link rel="icon" href={logo} />
    </Helmet>

    <main>
      <section>
        <About />
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

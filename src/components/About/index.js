import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

import Navigation from '../Navigation'
import Footer from '../Footer'

import './About.css'

class About extends React.Component {
  constructor(props) {
    super(props)
    this.getTitleColor = this.getTitleColor.bind(this)
    this.getHeadline = this.getHeadline.bind(this)
  }

  getTitleColor(pathname) {
    let color = ''
    if (pathname.includes('toolbox')) {
      color = 'tortoise'
    } else if (pathname.includes('contact')) {
      color = 'green'
    } else if (pathname.includes('career')) {
      color = 'dark'
    } else {
      color = 'navy'
    }
    return color
  }

  getHeadline(pathname) {
    let title = ''
    if (pathname.includes('toolbox')) {
      title = 'Serial Builder'
    } else if (pathname.includes('contact')) {
      title = 'Full Stack Dev'
    } else if (pathname.includes('career')) {
      title = 'Software Engineer'
    } else {
      title = 'Maker of Things'
    }
    return title
  }

  render() {
    const pathname = this.props.location.pathname
    const titleColor = this.getTitleColor(pathname)
    const headline = this.getHeadline(pathname)

    return (
      <StaticQuery
        query={graphql`
          query AboutQuery {
            site {
              siteMetadata {
                about
                title
              }
            }
          }
        `}
        render={data => (
          <>
            <div className="About">
              <div>
                <h1>{headline}</h1>
                <h2 className={titleColor}>{data.site.siteMetadata.title}</h2>
                <Navigation location={this.props.location} />
                <p>{data.site.siteMetadata.about}</p>
                <Footer />
              </div>
            </div>
          </>
        )}
      />
    )
  }
}
export default About

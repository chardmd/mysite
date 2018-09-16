import React from 'react'
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
    } else if (pathname.includes('tweets')) {
      color = 'navy'
    } else {
      color = 'dark'
    }
    return color
  }

  getHeadline(pathname) {
    let title = ''
    if (pathname.includes('toolbox')) {
      title = 'Full Stack Dev'
    } else if (pathname.includes('contact')) {
      title = 'Software Engineer'
    } else if (pathname.includes('tweets')) {
      title = 'Builder of Things'
    } else {
      title = 'Serial Maker'
    }
    return title
  }

  render() {
    const pathname = this.props.location.pathname
    const titleColor = this.getTitleColor(pathname)
    const headline = this.getHeadline(pathname)
    return (
      <div className="About">
        <div>
          <h1>{headline}</h1>
          <h2 className={titleColor}>Richard Dimalanta</h2>
          <Navigation location={this.props.location} />
          <p>
            Richard is skilled in building SaaS solutions using high performance
            web technologies. He has a wide range of experience in the tech
            industry and have worked across multiple countries such as
            Singapore, Philippines, and currently Australia. He always aim to
            build services that makes people's lives better.
          </p>
          <Footer />
        </div>
      </div>
    )
  }
}
export default About

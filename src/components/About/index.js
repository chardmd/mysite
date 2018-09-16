import React from 'react'
import Navigation from '../Navigation'
import Footer from '../Footer'

import './About.css'

class About extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      color: '',
    }
    this.setTitleColor = this.setTitleColor.bind(this)
  }

  UNSAFE_componentWillMount() {
    this.setTitleColor(this.props.location.pathname)
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    this.setTitleColor(nextProps.location.pathname)
  }

  setTitleColor(pathname) {
    if (pathname.includes('toolbox')) {
      this.setState({
        color: 'tortoise',
      })
    } else if (pathname.includes('contact')) {
      this.setState({
        color: 'green',
      })
    } else {
      this.setState({
        color: 'black',
      })
    }
  }

  render() {
    return (
      <div className="About">
        <div className="animated">
          <h1>Software Engineer</h1>
          <h2 className={this.state.color}>Richard Dimalanta</h2>
          <Navigation location={this.props.location} match={this.props.match} />
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

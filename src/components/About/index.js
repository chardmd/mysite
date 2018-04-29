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
  }

  componentWillMount() {
    this.setTitleColor(this.props.location.pathname)
  }

  componentWillReceiveProps(nextProps) {
    this.setTitleColor(nextProps.location.pathname)
  }

  setTitleColor(pathname) {
    if (pathname === '/toolbox') {
      this.setState({
        color: 'red',
      })
    } else if (pathname === '/contact') {
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
        <div>
          <h1>Software Engineer</h1>
          <h2 className={this.state.color}>Richard Dimalanta</h2>
          <Navigation />
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

import React from 'react'
import Navigation from '../Navigation'
import Footer from '../Footer'

import './About.css'

class About extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      color: '',
      title: '',
    }
    this.setTitleColor = this.setTitleColor.bind(this)
    this.setTitle = this.setTitle.bind(this)
  }

  componentWillMount() {
    this.setTitleColor(this.props.location.pathname)
    this.setTitle(this.props.location.pathname)
  }

  componentWillReceiveProps(nextProps) {
    this.setTitleColor(nextProps.location.pathname)
    this.setTitle(nextProps.location.pathname)
  }

  setTitleColor(pathname) {
    if (pathname.includes('toolbox')) {
      this.setState({
        color: 'red',
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

  setTitle(pathname) {
    if (pathname.includes('toolbox')) {
      this.setState({
        title: 'Web Engineer',
      })
    } else if (pathname.includes('contact')) {
      this.setState({
        title: 'Software Craftsman',
      })
    } else {
      this.setState({
        title: 'Full Stack Developer',
      })
    }
  }

  render() {
    return (
      <div className="About">
        <div>
          <h1>{this.state.title}</h1>
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

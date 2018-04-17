import React from 'react'
import ContactButton from '../ContactButton'
import Navigation from '../Navigation'
import Footer from '../Footer'

import './About.css'

const About = () => (
  <div className="About">
    <div>
      <h1>Software Engineer</h1>
      <h2>Richard Dimalanta</h2>
      <Navigation />
      <p>
        Richard is skilled in building SaaS solutions using high performance web
        technologies. He is well versed in front-end, middleware, and back-end
        development and with experience in various markets such as Australia,
        Singapore and the Philippines. He always aim to build services that
        makes people's lives better.
      </p>
      <Footer />
    </div>
  </div>
)

export default About

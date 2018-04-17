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
        development. With experience in various markets such as Australia
        <span>&nbsp;🇦🇺</span> Singapore<span>&nbsp;🇸🇬</span>, and the
        Philippines<span>&nbsp;🇵🇭</span>, it is guaranteed that he will build
        the best solutions in less time.
      </p>
      <Footer />
    </div>
  </div>
)

export default About

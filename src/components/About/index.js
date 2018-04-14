import React from 'react'
import ContactButton from '../ContactButton'
import Footer from '../Footer'

import './About.css'

const About = () => (
  <section className="About">
    <div>
      <h1>Software Engineer</h1>
      <h2>Richard Dimalanta</h2>
      <p>
        Richard is skilled in building SaaS solutions using high performance web
        technologies. He is well versed in front-end, middleware, and back-end
        development. With experience in various markets such as Australia,
        Singapore, and the Philippines, it is guaranteed that he will build the
        best solutions in less time.
      </p>
      <ContactButton />
      <Footer />
    </div>
  </section>
)

export default About

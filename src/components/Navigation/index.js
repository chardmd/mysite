import React from 'react'
import Link from 'gatsby-link'
import './Navigation.css'

const Navigation = () => (
  <div className="Navigation">
    <ul>
      <li>
        <Link to="/">Experience</Link>
      </li>
      <li>
        <Link to="/toolbox">Toolbox</Link>
      </li>
      <li>
        <Link to="/contact">Let's work together</Link>
      </li>
    </ul>
  </div>
)

export default Navigation

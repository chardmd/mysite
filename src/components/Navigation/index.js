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
        <Link to="/404">Toolbox</Link>
      </li>
      <li>
        <Link to="/404">Contact</Link>
      </li>
    </ul>
  </div>
)

export default Navigation

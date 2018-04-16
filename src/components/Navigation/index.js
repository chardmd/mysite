import React from 'react'
import Link from 'gatsby-link'
import './Navigation.css'

const Navigation = () => (
  <div className="Navigation">
    <ul>
      <li>
        <Link
          exact
          to="/"
          activeStyle={{
            borderBottom: '2px solid #33485e',
            paddingBottom: '2px',
          }}
        >
          Experience
        </Link>
      </li>
      <li>
        <Link
          exact
          to="/toolbox"
          activeStyle={{
            borderBottom: '2px solid #33485e',
            paddingBottom: '2px',
          }}
        >
          Toolbox
        </Link>
      </li>
      <li>
        <Link
          exact
          to="/contact"
          activeStyle={{
            borderBottom: '2px solid #33485e',
            paddingBottom: '2px',
          }}
        >
          Let's work together
        </Link>
      </li>
    </ul>
  </div>
)

export default Navigation

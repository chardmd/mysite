import React from 'react'
import { Link } from 'gatsby'
import './Navigation.css'

class Navigation extends React.Component {
  render() {
    const pathname = this.props.location.pathname
    return (
      <div className="Navigation">
        <ul>
          <li>
            <Link
              to="/"
              className={
                !pathname.includes('toolbox') &&
                !pathname.includes('contact') &&
                !pathname.includes('experience')
                  ? 'activeLink'
                  : ''
              }
            >
              Tweets
            </Link>
          </li>
          <li>
            <Link
              to="/experience"
              className={pathname.includes('experience') ? 'activeLink' : ''}
            >
              Experience
            </Link>
          </li>
          <li>
            <Link
              to="/toolbox"
              className={pathname.includes('toolbox') ? 'activeLink' : ''}
            >
              Toolbox
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className={pathname.includes('contact') ? 'activeLink' : ''}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    )
  }
}

export default Navigation

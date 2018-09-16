import React from 'react'
import { Link } from 'gatsby'
import './Metadata.css'

const Metadata = () => (
  <div className="Metadata">
    <span>
      Handcrafted by{' '}
      <Link to="/">
        Richard{' '}
        <span role="img" aria-label="cool">
          😎
        </span>
      </Link>
      <br />
      Currently based in Sydney, Australia
      <span role="img" aria-label="flag">
        &nbsp;🇦🇺
      </span>
    </span>
  </div>
)

export default Metadata

import React from 'react'
import Link from 'gatsby-link'
import './Metadata.css'

const Metadata = () => (
  <div className="Metadata">
    <span>
      Handcrafted by{' '}
      <Link exact to="/">
        Richard <span>😎</span>
      </Link>
      <br />
      Currently based in Sydney, Australia.
    </span>
  </div>
)

export default Metadata

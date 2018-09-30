import React from 'react'
import './Metadata.css'

const handleClick = () => {
  window.location.href = `mailto:richard@chardmd.com`
}

const Metadata = () => (
  <div className="Metadata">
    <span>
      Handcrafted by{' '}
      <a onClick={handleClick}>
        Richard{' '}
        <span role="img" aria-label="cool">
          😎
        </span>
      </a>
      <br />
      Currently based in Sydney, Australia
      <span role="img" aria-label="flag">
        &nbsp;🇦🇺
      </span>
    </span>
  </div>
)

export default Metadata

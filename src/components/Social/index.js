import React from 'react'
import { OutboundLink } from 'gatsby-plugin-google-analytics'
import './Social.css'

const Social = () => (
  <div className="Social">
    <ul>
      <li>
        <h3>You can also find him in </h3>
      </li>
      <li>
        <OutboundLink href="https://github.com/chardmd" target="_blank">
          <i className="fa fa-github" />
        </OutboundLink>
      </li>
      <li>
        <OutboundLink
          href="https://www.linkedin.com/in/chardmd"
          target="_blank"
        >
          <i className="fa fa-linkedin" />
        </OutboundLink>
      </li>
    </ul>
  </div>
)

export default Social

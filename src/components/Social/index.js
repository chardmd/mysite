import React from 'react'
import { OutboundLink } from 'gatsby-plugin-google-analytics'

import githubIcon from '../../assets/github.svg'
import linkedinIcon from '../../assets/linkedin.svg'
import './Social.css'

const Social = () => (
  <div className="Social">
    <ul>
      <li>
        <h3>You can also find me on</h3>
      </li>
      <li>
        <OutboundLink href="https://github.com/chardmd" target="_blank">
          <img src={githubIcon} />
        </OutboundLink>
      </li>
      <li>
        <OutboundLink
          href="https://www.linkedin.com/in/chardmd"
          target="_blank"
        >
          <img src={linkedinIcon} />
        </OutboundLink>
      </li>
    </ul>
  </div>
)

export default Social

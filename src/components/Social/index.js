import React from 'react'
import { OutboundLink } from 'gatsby-plugin-google-analytics'

import githubIcon from '../../assets/github.svg'
import linkedinIcon from '../../assets/linkedin.svg'
import twitterIcon from '../../assets/twitter.svg'
import './Social.css'

const Social = () => (
  <div className="Social">
    <ul>
      <li>
        <h3>You can also find him on</h3>
      </li>
      <li>
        <OutboundLink
          href="https://www.linkedin.com/in/chardmd"
          target="_blank"
        >
          <img src={linkedinIcon} alt="linkedin" className="linkedin" />
        </OutboundLink>
      </li>
      <li>
        <OutboundLink href="https://github.com/chardmd" target="_blank">
          <img src={githubIcon} alt="github" className="github" />
        </OutboundLink>
      </li>
      <li>
        <OutboundLink href="https://twitter.com/iamchardmd" target="_blank">
          <img src={twitterIcon} alt="twitter" className="twitter" />
        </OutboundLink>
      </li>
    </ul>
  </div>
)

export default Social

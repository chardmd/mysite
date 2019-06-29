import React from 'react'
import { OutboundLink } from 'gatsby-plugin-google-analytics'

import githubIcon from '../../assets/github.svg'
import linkedinIcon from '../../assets/linkedin.svg'
import twitterIcon from '../../assets/twitter.svg'
import angellistIcon from '../../assets/angellist.svg'

import { List, ListItem, Header, Image } from './styles'

const Social = () => (
  <List>
    <ListItem>
      <Header>You can also find him on</Header>
    </ListItem>
    <ListItem>
      <OutboundLink href="https://www.linkedin.com/in/chardmd" target="_blank">
        <Image src={linkedinIcon} alt="linkedin" className="linkedin" />
      </OutboundLink>
    </ListItem>
    <ListItem>
      <OutboundLink href="https://github.com/chardmd" target="_blank">
        <Image src={githubIcon} alt="github" className="github" />
      </OutboundLink>
    </ListItem>
    <ListItem>
      <OutboundLink href="https://twitter.com/iamchardmd" target="_blank">
        <Image src={twitterIcon} alt="twitter" className="twitter" />
      </OutboundLink>
    </ListItem>
    <ListItem>
      <OutboundLink href="https://angel.co/iamchardmd" target="_blank">
        <Image src={angellistIcon} alt="angellist" className="angellist" />
      </OutboundLink>
    </ListItem>
  </List>
)

export default Social

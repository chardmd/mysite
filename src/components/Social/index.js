import React from 'react'

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
      <a href="https://www.linkedin.com/in/chardmd" target="_blank" rel="noopener noreferrer">
        <Image src={linkedinIcon} alt="linkedin" className="linkedin" />
      </a>
    </ListItem>
    <ListItem>
      <a href="https://github.com/chardmd" target="_blank" rel="noopener noreferrer">
        <Image src={githubIcon} alt="github" className="github" />
      </a>
    </ListItem>
    <ListItem>
      <a href="https://twitter.com/iamchardmd" target="_blank" rel="noopener noreferrer">
        <Image src={twitterIcon} alt="twitter" className="twitter" />
      </a>
    </ListItem>
    <ListItem>
      <a href="https://angel.co/iamchardmd" target="_blank" rel="noopener noreferrer">
        <Image src={angellistIcon} alt="angellist" className="angellist" />
      </a>
    </ListItem>
  </List>
)

export default Social

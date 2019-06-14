import React from 'react'
import { List, ListItem, LinkWrapper } from './styles'

const Navigation = ({ location }) => {
  const { pathname } = location
  return (
    <List>
      <ListItem>
        <LinkWrapper
          to="/"
          active={
            !pathname.includes('toolbox') &&
            !pathname.includes('contact') &&
            !pathname.includes('career')
              ? 1
              : 0
          }
        >
          Tweets
        </LinkWrapper>
      </ListItem>
      <ListItem>
        <LinkWrapper to="/career" active={pathname.includes('career') ? 1 : 0}>
          Career
        </LinkWrapper>
      </ListItem>
      <ListItem>
        <LinkWrapper
          to="/toolbox"
          active={pathname.includes('toolbox') ? 1 : 0}
        >
          Toolbox
        </LinkWrapper>
      </ListItem>
      <ListItem>
        <LinkWrapper
          to="/contact"
          active={pathname.includes('contact') ? 1 : 0}
        >
          Contact
        </LinkWrapper>
      </ListItem>
    </List>
  )
}

export default Navigation

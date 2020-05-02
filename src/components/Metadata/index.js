import React from 'react'
import { Container, Link, Divider, Row } from './styles'

const Metadata = () => (
  <Container>
    <Row>
      Handcrafted by{' '}
      <Link href="mailto:hello@chardmd.com">
        Richard&nbsp;
        <span role="img" aria-label="cool">
          😎
      </span>
      </Link>
    </Row>
    <Row>
    <span href="mailto:hello@chardmd.com">
        hello@chardmd.com
      <span role="img" aria-label="flag">
          &nbsp;🇦🇺
    </span>
      </span>
      <Divider>&nbsp;</Divider>
    <span>This site is </span>
    <Link href="https://github.com/chardmd/mysite" target="_blank">
        Open Source!
    </Link>
    </Row>
  </Container>
)

export default Metadata

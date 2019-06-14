import React from 'react'
import { Container, Link } from './styles'

const Metadata = () => (
  <Container>
    Handcrafted by{' '}
    <Link href="mailto:richard@chardmd.com">
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
  </Container>
)

export default Metadata

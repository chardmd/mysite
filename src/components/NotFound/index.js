import React from 'react'

import { Container, Content, Header, Para } from './styles'
import giphy from '../../assets/giphy.gif'

const NotFound = () => (
  <Container>
    <Content className="animated bounceIn">
      <Header>Oopps.. Page Not Found</Header>
      <Para>Nothing to see here ¯\_(ツ)_/¯</Para>
      <img src={giphy} width="480" alt="excite" />
    </Content>
  </Container>
)

export default NotFound

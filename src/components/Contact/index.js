import React from 'react'
import { Container, Content, Header, Button } from './styles'

const Contact = () => {
  //open email client
  const handleClick = () => (window.location.href = `mailto:hello@chardmd.com`)

  return (
    <Container>
      <Content>
        <Header className="animated fadeIn">
          Richard will help you build software that solves business problems,
          increase revenue, or reduce costs.
        </Header>
        <br />
        <Button className="animated tada" onClick={handleClick}>
          Hey, you! Let’s connect.
        </Button>
      </Content>
    </Container>
  )
}
export default Contact

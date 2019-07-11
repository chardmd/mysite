import React, { useEffect, useRef } from 'react'
import { Container, Content } from './styles'

const Tweets = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    if (typeof window.twttr !== 'undefined') {
      window.twttr.widgets.load(document.getElementById(containerRef.current))
    }
  }, [])

  return (
    <Container ref={containerRef}>
      <Content>
        <a className="twitter-timeline" href="https://twitter.com/iamchardmd" />
      </Content>
    </Container>
  )
}
export default Tweets

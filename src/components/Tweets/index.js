import React, { useEffect, useRef } from 'react'
import { Container, Content, Battery, Liquid, Text } from './styles'

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
        <Text
          className="twitter-timeline"
          href="https://twitter.com/iamchardmd?ref_src=twsrc%5Etfw"
        >
          <Battery>
            <Liquid />
          </Battery>
          <span>Loading Tweets..</span>
        </Text>
      </Content>
    </Container>
  )
}
export default Tweets

import React, { useEffect, useRef } from 'react'
import { Container, Content, Battery, Liquid, Text } from './styles'

const Tweets = () => {
  useEffect(() => {
    if (typeof window.twttr !== 'undefined') {
      window.twttr.widgets.load()
    }
  }, [])

  return (
    <Container>
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

/* global twttr */
import React, { useEffect, useRef } from 'react'
import { Container, Content } from './styles'

const Tweets = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    if (typeof twttr === 'undefined') {
      const twitterscript = document.createElement('script')
      twitterscript.src = 'https://platform.twitter.com/widgets.js'
      twitterscript.async = true
      twitterscript.id = 'twitter-wjs'
      containerRef.current.parentNode.appendChild(twitterscript)
    } else {
      twttr.widgets.load(document.getElementById(containerRef.current))
    }
  }, [])

  return (
    <Container ref={containerRef}>
      <Content>
        <a className="twitter-timeline" href="https://twitter.com/iamchardmd">
          &nbsp;
        </a>
      </Content>
    </Container>
  )
}
export default Tweets

import React from 'react'
import './Tweets.css'

class Tweets extends React.Component {
  render() {
    return (
      <div className="Tweets">
        <div className="content">
          <a
            class="twitter-timeline"
            href="https://twitter.com/iamchardmd?ref_src=twsrc%5Etfw"
          />
        </div>
      </div>
    )
  }
}
export default Tweets

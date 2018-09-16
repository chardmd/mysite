/* global twttr */
import React, { Fragment } from 'react'
import ReactDOM from 'react-dom'
import './Tweets.css'

class Tweets extends React.Component {
  constructor(props) {
    super(props)
    this.state = { initialized: false }
  }

  componentDidMount() {
    if (this.state.initialized) {
      return
    }

    if (typeof twttr === 'undefined') {
      const twittertimeline = ReactDOM.findDOMNode(this)
      const twitterscript = document.createElement('script')
      twitterscript.src = 'https://platform.twitter.com/widgets.js'
      twitterscript.async = true
      twitterscript.id = 'twitter-wjs'
      twittertimeline.parentNode.appendChild(twitterscript)
    } else {
      twttr.widgets.load()
    }

    this.initialized()
  }

  initialized() {
    this.setState({ initialized: true })
  }

  render() {
    return (
      <Fragment>
        <div className="Tweets">
          <div className="content">
            <a
              className="twitter-timeline"
              href="https://twitter.com/iamchardmd"
            >
              &nbsp;
            </a>
          </div>
        </div>
      </Fragment>
    )
  }
}
export default Tweets

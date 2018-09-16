import React, { Fragment } from 'react'
import Helmet from 'react-helmet'
import './Tweets.css'

class Tweets extends React.Component {
  render() {
    return (
      <Fragment>
        <Helmet>
          <script
            async
            src="https://platform.twitter.com/widgets.js"
            charset="utf-8"
          />
        </Helmet>
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

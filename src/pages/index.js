import React from 'react'
import Layout from '../components/layout'
import Tweets from '../components/Tweets'

const TimelinePage = props => (
  <Layout location={props.location}>
    <Tweets />
  </Layout>
)

export default TimelinePage

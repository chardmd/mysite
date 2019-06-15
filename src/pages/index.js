import React from 'react'
import Tweets from '../components/Tweets'
import Layout from '../components/layout'

const HomePage = ({ location }) => {
  return (
    <Layout location={location}>
      <Tweets />
    </Layout>
  )
}
export default HomePage

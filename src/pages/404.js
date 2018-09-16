import React from 'react'
import Layout from '../components/layout'
import giphy from '../assets/giphy.gif'

const NotFoundPage = props => (
  <Layout location={props.location}>
    <div className="pageNotFound">
      <div className="animated bounceIn">
        <h1>Oopps.. Page Not Found</h1>
        <p>You just hit a route that doesn&#39;t exist.</p>
        <img src={giphy} width="480" alt="excite" />
      </div>
    </div>
  </Layout>
)

export default NotFoundPage

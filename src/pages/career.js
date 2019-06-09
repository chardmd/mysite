import React from 'react'
import Layout from '../components/layout'
import Career from '../components/Career'

class IndexPage extends React.Component {
  render() {
    return (
      <Layout location={this.props.location}>
        <Career />
      </Layout>
    )
  }
}

export default IndexPage

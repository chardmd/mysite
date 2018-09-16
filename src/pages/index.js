import React from 'react'
import Layout from '../components/layout'
import Terminal from '../components/Terminal'

class IndexPage extends React.Component {
  render() {
    return (
      <Layout location={this.props.location}>
        <Terminal />
      </Layout>
    )
  }
}

export default IndexPage

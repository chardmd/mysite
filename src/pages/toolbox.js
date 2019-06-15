import React from 'react'
import Toolbox from '../components/Toolbox'
import Layout from '../components/layout'

const ToolboxPage = ({ location }) => {
  return (
    <Layout location={location}>
      <Toolbox />
    </Layout>
  )
}
export default ToolboxPage

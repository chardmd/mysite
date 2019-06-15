import React from 'react'
import Career from '../components/Career'
import Layout from '../components/layout'

const CareerPage = ({ location }) => {
  return (
    <Layout location={location}>
      <Career />
    </Layout>
  )
}
export default CareerPage

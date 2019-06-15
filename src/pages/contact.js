import React from 'react'
import Contact from '../components/Contact'
import Layout from '../components/layout'

const ContactPage = ({ location }) => {
  return (
    <Layout location={location}>
      <Contact />
    </Layout>
  )
}
export default ContactPage

import React from "react";
import SEO from "../components/SEO";
import Contact from "../components/Contact";
import Layout from "../components/Layout";

const NotFoundTemplate = ({ location }) => (
  <>
    <SEO />
    <Layout location={location}>
      <Contact seoTitle="Contact" />
    </Layout>
  </>
);

export default NotFoundTemplate;

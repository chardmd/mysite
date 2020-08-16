import React from "react";
import SEO from "../components/SEO";
import Career from "../components/Career";
import Layout from "../components/Layout";

const NotFoundTemplate = ({ location }) => (
  <>
    <SEO />
    <Layout location={location}>
      <Career seoTitle="Career" />
    </Layout>
  </>
);

export default NotFoundTemplate;

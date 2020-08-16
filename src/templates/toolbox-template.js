import React from "react";
import SEO from "../components/SEO";
import Toolbox from "../components/Toolbox";
import Layout from "../components/Layout";

const NotFoundTemplate = ({ location }) => (
  <>
    <SEO />
    <Layout location={location}>
      <Toolbox />
    </Layout>
  </>
);

export default NotFoundTemplate;

import React from "react";
import { graphql } from "gatsby";

import Tweets from "../components/Tweets";
import SEO from "../components/SEO";
import Layout from "../components/Layout";

const Index = ({ location, data }) => {
  return (
    <>
      <SEO />
      <Layout location={location}>
        <Tweets />
      </Layout>
    </>
  );
};

export default Index;

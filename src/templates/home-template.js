import React from "react";
import { graphql } from "gatsby";

import Tweets from "../components/Tweets";
import SEO from "../components/SEO";

const Index = () => {
  return (
    <>
      <SEO />
      <Tweets seoTitle="Home" />
    </>
  );
};

export default Index;

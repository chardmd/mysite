import React from "react";
import Layout from "../components/Layout"; // layout should be the last one, to prevent the 'conflicting order' warning during 'yarn run build'

const NotFoundTemplate = ({ location }) => (
  <Layout location={location}>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </Layout>
);

export default NotFoundTemplate;

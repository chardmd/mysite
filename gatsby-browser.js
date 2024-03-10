"use strict";

import React from "react";
import Layout from "./src/components/Layout";
import "./src/styles/init.scss";

export const onInitialClientRender = () => {
  window.___GATSBY_INITIAL_RENDER_COMPLETE = true;
};

export const wrapPageElement = ({ element, props }) => (
  <Layout {...props}>{element}</Layout>
);

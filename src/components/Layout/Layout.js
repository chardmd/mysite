/* eslint-disable no-confusing-arrow */
import React from "react";
import Drift from "react-driftjs";

// Load the CSS for the work-sans font.
import "fontsource-grandstander/latin.css";

import About from "../About";

import * as styles from "./Layout.module.scss";

import useSiteMetadata from "../../hooks/use-site-metadata";

const Layout = ({ children, location }) => {
  const siteMetadata = useSiteMetadata();

  return (
    <main className={styles.main}>
      <section className={styles.section}>
        <About location={location} />
      </section>
      <section className={styles.section}>{children}</section>
      <Drift appId={siteMetadata.driftId} />
    </main>
  );
};

export default Layout;

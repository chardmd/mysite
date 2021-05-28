import React from "react";

import styles from "./Metadata.module.scss";
import useSiteMetadata from "../../hooks/use-site-metadata";

const Metadata = () => {
  const siteMetadata = useSiteMetadata();
  return (
    <div className={styles.container}>
      <div className={styles.row}>
        Designed & handcrafted by{" "}
        <a className={styles.link} href="mailto:hello@chardmd.com">
          Richard&nbsp;
          <span role="img" aria-label="cool">
            😎
          </span>
        </a>
      </div>
      <div className={styles.row}>
        <span href={`mailto:${siteMetadata.email}`}>
          {siteMetadata.email}
          <span role="img" aria-label="flag">
            &nbsp;🌎
          </span>
        </span>
        <span className={styles.divider}>&nbsp;</span>
        <span>This site is </span>
        <a
          className={styles.link}
          href="https://github.com/chardmd/mysite"
          target="_blank"
        >
          Open Source!
        </a>
      </div>
    </div>
  );
};

export default Metadata;

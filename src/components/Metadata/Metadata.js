import React from "react";
import * as styles from "./Metadata.module.scss";
import useSiteMetadata from "../../hooks/use-site-metadata";

const Metadata = () => {
  const siteMetadata = useSiteMetadata();

  return (
    <div className={styles.container}>
      <div className={styles.row}>
        Handcrafted by{" "}
        <a className={styles.link} href="#">
          Richard{" "}
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
          rel="noopener noreferrer"
        >
          Open Source!
        </a>
      </div>
    </div>
  );
};

export default Metadata;

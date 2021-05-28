import React from "react";
import { Link } from "gatsby";

import * as styles from "./Navigation.module.scss";

const Navigation = ({ location }) => {
  const { pathname } = location;
  return (
    <ul className={`${styles.list}`}>
      <li className={styles.listItem}>
        <Link
          className={styles.linkWrapper}
          to="/"
          activeClassName={
            pathname === "/" || pathname === null || pathname === undefined
              ? styles.activeLink
              : ""
          }
        >
          Tweets
        </Link>
      </li>
      <li className={styles.listItem}>
        <Link
          className={styles.linkWrapper}
          to="/career"
          activeClassName={pathname.includes("career") ? styles.activeLink : ""}
        >
          Career
        </Link>
      </li>
      <li className={styles.listItem}>
        <Link
          className={styles.linkWrapper}
          to="/toolbox"
          activeClassName={
            pathname.includes("toolbox") ? styles.activeLink : ""
          }
        >
          Toolbox
        </Link>
      </li>
      <li className={styles.listItem}>
        <Link
          className={styles.linkWrapper}
          to="/contact"
          activeClassName={
            pathname.includes("contact") ? styles.activeLink : ""
          }
        >
          Contact
        </Link>
      </li>
    </ul>
  );
};

export default Navigation;

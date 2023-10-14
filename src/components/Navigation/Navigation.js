import React from "react";
import { Link } from "gatsby";
import * as styles from "./Navigation.module.scss";

const Navigation = ({ location }) => {
  const { pathname } = location;

  return (
    <ul className={styles.list}>
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
          Explore
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
          Connect
        </Link>
      </li>
    </ul>
  );
};

export default Navigation;

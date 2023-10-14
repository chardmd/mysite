import React from "react";
import githubIcon from "../../assets/github.svg";
import linkedinIcon from "../../assets/linkedin.svg";
import angellistIcon from "../../assets/angellist.svg";
import * as styles from "./Social.module.scss";

const Social = () => (
  <ul className={styles.list}>
    <li className={styles.listItem}>
      <h3 className={styles.header}>You can also find me on</h3>
    </li>
    <li className={styles.listItem}>
      <a
        href="https://www.linkedin.com/in/chardmd"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img className={styles.image} src={linkedinIcon} alt="LinkedIn" />
      </a>
    </li>
    <li className={styles.listItem}>
      <a
        href="https://github.com/chardmd"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img className={styles.image} src={githubIcon} alt="GitHub" />
      </a>
    </li>
    <li className={styles.listItem}>
      <a
        href="https://angel.co/iamchardmd"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img className={styles.image} src={angellistIcon} alt="AngelList" />
      </a>
    </li>
  </ul>
);

export default Social;

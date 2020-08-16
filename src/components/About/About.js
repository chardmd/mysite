import React from "react";

import Navigation from "../Navigation";
import Social from "../Social";
import Metadata from "../Metadata";
import styles from "./About.module.scss";
import useSiteMetadata from "../../hooks/use-site-metadata";

const getTitleColorHeader = (pathname) => {
  let colorHeader = "";
  if (pathname.includes("toolbox")) {
    colorHeader = "toolboxHeader";
  } else if (pathname.includes("contact")) {
    colorHeader = "contactHeader";
  } else if (pathname.includes("career")) {
    colorHeader = "careerHeader";
  } else {
    colorHeader = "defaultHeader";
  }
  return colorHeader;
};

const getHeadline = (pathname) => {
  let title = "";
  if (pathname.includes("toolbox")) {
    title = "Serial Builder";
  } else if (pathname.includes("contact")) {
    title = "Full Stack Developer";
  } else if (pathname.includes("career")) {
    title = "Software Engineer";
  } else {
    title = "Maker of Things";
  }
  return title;
};

const About = ({ location }) => {
  const siteMetadata = useSiteMetadata();
  const pathname = location.pathname;
  const titleColorHeader = getTitleColorHeader(pathname);
  const headline = getHeadline(pathname);
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h1 className={styles.header}>{headline}</h1>
        <h2 className={`${styles.header2} ${styles[titleColorHeader]}`}>
          {siteMetadata.headline}
        </h2>
        <Navigation location={location} />
        <p className={styles.paragraph}>{siteMetadata.about}</p>
        <Social />
        <Metadata />
      </div>
    </div>
  );
};

export default About;

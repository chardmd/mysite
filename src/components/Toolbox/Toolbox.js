import React from "react";

import styles from "./Toolbox.module.scss";

const Toolbox = () => {
  const images = [
    "javascript",
    "redux",
    "nodejs",
    "vscode",
    "css3",
    "react",
    "html5",
    "azure",
    "docker",
    "webpack",
    "firebase",
    "material",
    "gatsby",
    "redis",
    "mongodb",
    "npm",
    "angular",
    "netlify",
    "aws",
    "git",
    "java",
    "jenkins",
    "mysql",
    "postgresql",
    "spring",
    "terminal",
    "tomcat",
  ];

  return (
    <div className={styles.container}>
      <div className={styles.grid}>
        {images.map((i) => {
          return (
            <img
              className={`${styles.img} animate__animated animate__pulse animate__fast`}
              src={require(`../../assets/${i}.svg`)}
              alt={i}
              key={`skill-${i}`}
            />
          );
        })}
      </div>
    </div>
  );
};
export default Toolbox;

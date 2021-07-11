import React from "react";

import * as styles from "./Contact.module.scss";

const Contact = () => {
  //open email client
  const handleClick = () =>
    (window.location.href = `mailto:hello@chardmd.com?subject=Hey, Richard, cool site! :)`);

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={`${styles.header} animate__animated animate__fadeIn`}>
          Richard will help you build software that solves business problems,
          increase revenue, or reduce costs.
        </h1>
        <br />
        <button
          className={`${styles.button} animate__animated animate__backInRight`}
          onClick={handleClick}
        >
          Request his Resume & Portfolio
        </button>
      </div>
    </div>
  );
};
export default Contact;

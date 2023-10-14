import React, { useState, useEffect } from "react";
import * as styles from "./Contact.module.scss";

const Contact = () => {
  const [driftLoaded, setDriftLoaded] = useState(false);

  const handleEmailClick = () => {
    // eslint-disable-next-line operator-linebreak
    window.location.href =
      "mailto:hello@chardmd.com?subject=Hey Richard, I want to see your portfolio!";
  };

  useEffect(() => {
    if (!driftLoaded) {
      window.drift.on("ready", (api) => {
        api.showWelcomeMessage();
      });
      setDriftLoaded(true);
    }

    return function cleanup() {
      if (window.drift) {
        window.drift.on("ready", (api) => {
          api.hideWelcomeMessage();
        });
      }
    };
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1
          className={`${styles.header} animate__animated animate__fadeIn animate__fast`}
        >
          I specialize in web apps, cloud computing, and open-source
          technologies. I’m here to collaborate with you, whether you’re a
          startup striving to make your mark or an established corporation
          aiming to drive innovation.
        </h1>
        <br />
        <button
          className={`${styles.button} animate__animated animate__fadeIn animate__faster`}
          onClick={handleEmailClick}
        >
          Request My Portfolio 📥
        </button>
      </div>
    </div>
  );
};

export default Contact;

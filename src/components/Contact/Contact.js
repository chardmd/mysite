import React, { useState, useEffect } from "react";

import * as styles from "./Contact.module.scss";

const Contact = () => {
  const [driftLoaded, setDriftLoaded] = useState(false);

  //open email client
  const handleClick = () =>
    (window.location.href = `mailto:hello@chardmd.com?subject=Hey Richard!`);

  useEffect(() => {
    if (!driftLoaded) {
      window.drift.on("ready", function (api, payload) {
        api.showWelcomeMessage();
      });
      setDriftLoaded(true);
    }

    return function cleanup() {
      //hide the drift component
      if (window.drift) {
        window.drift.on("ready", function (api, payload) {
          api.hideWelcomeMessage();
        });
      }
    };
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={`${styles.header}`}>
          <div className="animate__animated animate__fadeIn animate__fast">
            I specialise in web apps, cloud computing, and open-source
            technologies. I’m here to collaborate with you, whether you’re a
            startup striving to make your mark or an established corporation
            aiming to drive innovation.
          </div>
        </h1>
        <br />
        <button
          className={`${styles.button} animate__animated animate__fadeIn animate__faster`}
          onClick={handleClick}
        >
          Feel free to reach out for my portfolio
        </button>
      </div>
    </div>
  );
};
export default Contact;

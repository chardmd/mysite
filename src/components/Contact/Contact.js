import React, { useState, useEffect } from "react";

import * as styles from "./Contact.module.scss";

const Contact = () => {
  const [driftLoaded, setDriftLoaded] = useState(false);

  //open email client
  const handleClick = () =>
    (window.location.href = `mailto:hello@chardmd.com?subject=Wazzup Richard, cool site! :)`);

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
          <div className="animate__animated animate__fadeIn animate__slow">
            <div className="animate__animated animate__tada animate__slow">
              Yo!
            </div>
            Richard will help you build software solutions that solve business
            problems, increase revenue, or reduce costs.
          </div>
        </h1>
        <br />
        <button
          className={`${styles.button} animate__animated animate__backInRight animate__fast`}
          onClick={handleClick}
        >
          Request his Resume & Portfolio
        </button>
      </div>
    </div>
  );
};
export default Contact;

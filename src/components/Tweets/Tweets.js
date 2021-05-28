/* global twttr */
import React, { useEffect, useRef } from "react";

import * as styles from "./Tweets.module.scss";

const Tweets = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (typeof twttr === "undefined") {
      const twitterscript = document.createElement("script");
      twitterscript.src = "https://platform.twitter.com/widgets.js";
      twitterscript.async = true;
      twitterscript.id = "twitter-wjs";
      containerRef.current.parentNode.appendChild(twitterscript);
    } else {
      twttr.widgets.load(document.getElementById(containerRef.current));
    }
  }, []);

  return (
    <div className={styles.container} ref={containerRef}>
      <div className={styles.content}>
        <a
          className={`${styles.text} twitter-timeline`}
          href="https://twitter.com/iamchardmd?ref_src=twsrc%5Etfw"
        >
          <div className={styles.battery}>
            <div className={styles.liquid} />
          </div>
        </a>
      </div>
    </div>
  );
};
export default Tweets;

import React, { useState, useEffect, useRef } from "react";
import Typist from "react-typist";
import jsonLogs from "./logs.json";
import jsonOutput from "./output.json";

import styles from "./Career.module.scss";

const COLORS = {
  yellow: "#f0f000",
  red: "#e94b35",
  green: "#2eda7a",
  purple: "#b184f5",
  tortoise: "#75e9f1",
};

const Career = () => {
  const [runTaskHidden, setRunTaskHidden] = useState(true);
  const [selectOptionClass, setSelectedOptionClass] = useState("");
  const [logs, setLogs] = useState([]);
  const [finalOutput, setFinalOutput] = useState(false);
  const [driftLoaded, setDriftLoaded] = useState(false);
  const screenRef = useRef(null);
  let timeouts = [];

  const createFinalOutput = () => {
    const template = jsonOutput.map((item, index) => {
      return (
        <div key={`${index}-company-output`}>
          <div>
            <span style={{ color: COLORS.tortoise }}>Position&nbsp;</span>
            <span>{item.position}</span>
          </div>
          <div>
            <span style={{ color: COLORS.tortoise }}>Duration&nbsp;</span>
            <span>{item.duration}</span>
          </div>
          <div>=======================================</div>
        </div>
      );
    });

    return (
      <div>
        <div style={{ color: COLORS.yellow }}>
          [All data downloaded] info --print && exit
        </div>
        {template}
      </div>
    );
  };

  const getLogColor = (logColor) => {
    switch (logColor) {
      case "green":
        return COLORS.green;
      case "yellow":
        return COLORS.yellow;
      case "purple":
        return COLORS.purple;
      default:
        return COLORS.green;
    }
  };

  const createLogs = () => {
    const template = logs.map((log, index) => {
      const color = getLogColor(log.class);
      return (
        <div key={`${index}-company`}>
          <span style={{ color }}>{log.label}&nbsp;</span>
          {log.desc}
        </div>
      );
    });
    return template;
  };

  const scrollToBottom = () => {
    if (screenRef.current) {
      screenRef.current.scrollTop = screenRef.current.scrollHeight;
    }
  };

  const addLogItems = () => {
    let timeout = null;
    for (let i = 0; i < jsonLogs.length; i++) {
      const item = jsonLogs[i];
      timeout = setTimeout(() => {
        setLogs((logs) => logs.concat(item));
        //call final output
        if (i === jsonLogs.length - 1) {
          setFinalOutput(true);
        }
        scrollToBottom();
      }, i * 160);
      timeouts = timeouts.concat(timeout);
    }
  };

  const runTaskSelection = () => {
    const timeout = setTimeout(() => {
      setSelectedOptionClass(COLORS.green);
      addLogItems();
    }, 500);
    timeouts = timeouts.concat(timeout);
  };

  const displayRunTask = () => {
    const timeout = setTimeout(() => {
      setRunTaskHidden(false);
      runTaskSelection();
    }, 500);
    timeouts = timeouts.concat(timeout);
  };

  useEffect(() => {
    if (!driftLoaded) {
      window.drift.on("ready", function (api, payload) {
        api.showWelcomeMessage();
      });
      setDriftLoaded(true);
    }

    return function cleanup() {
      //clear timeouts
      timeouts.forEach(clearTimeout);

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
        <ul className={styles.bar}>
          <li className={styles.barItem}>
            <div className={`${styles.circle} ${styles.redBg}`} />
          </li>
          <li className={styles.barItem}>
            <div className={`${styles.circle} ${styles.yellowBg}`} />
          </li>
          <li className={styles.barItem}>
            <div className={`${styles.circle} ${styles.greenBg}`} />
          </li>
        </ul>
        <div className={styles.screen} ref={screenRef}>
          <div className={styles.font}>
            <span style={{ color: COLORS.yellow }}>chardmd.com</span>
            @192.168.8.5:~$
            <Typist className={styles.wrapTypist} onTypingDone={displayRunTask}>
              <Typist.Delay
                className={styles.wrapTypist}
                ms={700}
                avgTypingSpeed={40}
              />
              <span className={styles.typeLine}>npm install work --global</span>
              <br />
            </Typist>
            {!runTaskHidden ? (
              <div>
                <div className="task">
                  <div style={{ color: selectOptionClass }}>
                    &gt;&nbsp;All (Install all options)
                  </div>
                </div>
                {createLogs()}
                {finalOutput && createFinalOutput()}
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Career;

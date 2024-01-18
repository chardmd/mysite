import React, { useState, useEffect, useRef } from "react";
import Typist from "react-typist";
import Deck from "../Deck";
import jsonLogs from "./logs.json";
import jsonOutput from "./output.json";
import * as styles from "./Experience.module.scss";

const COLORS = {
  yellow: "#f0f000",
  red: "#e94b35",
  green: "#2eda7a",
  purple: "#b184f5",
  tortoise: "#75e9f1",
};

const Experience = () => {
  const [runTaskHidden, setRunTaskHidden] = useState(true);
  const [selectOptionClass, setSelectedOptionClass] = useState("");
  const [logs, setLogs] = useState([]);
  const [finalOutput, setFinalOutput] = useState(false);
  const screenRef = useRef(null);
  const [deckLoaded, setDeckLoaded] = useState(false);
  const timeouts = [];

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

  const scrollToBottom = () => {
    if (screenRef.current) {
      screenRef.current.scrollTop = screenRef.current.scrollHeight;
    }
  };

  const addLogItems = () => {
    for (let i = 0; i < jsonLogs.length; i++) {
      const item = jsonLogs[i];
      const timeout = setTimeout(() => {
        setLogs((prevLogs) => [...prevLogs, item]);
        if (i === jsonLogs.length - 1) {
          setFinalOutput(true);
        }
        scrollToBottom();
      }, i * 160);
      timeouts.push(timeout);
    }
  };

  const runTaskSelection = () => {
    const timeout = setTimeout(() => {
      setSelectedOptionClass(COLORS.green);
      addLogItems();
    }, 500);
    timeouts.push(timeout);
  };

  const displayRunTask = () => {
    const timeout = setTimeout(() => {
      setRunTaskHidden(false);
      runTaskSelection();
    }, 500);
    timeouts.push(timeout);
  };

  useEffect(
    () => () => {
      timeouts.forEach(clearTimeout);
    },
    []
  );

  useEffect(() => {
    setTimeout(() => {
      setDeckLoaded(true);
    }, 2000);
  }, []);

  const createFinalOutput = () => (
    <div>
      <div style={{ color: COLORS.yellow }}>
        [All data downloaded] info --print && exit
      </div>
      {jsonOutput.map((item, index) => (
        <div key={`${index}-company-output`}>
          <div>
            <span style={{ color: COLORS.tortoise }}>Company&nbsp;</span>
            <span>{item.company}</span>
          </div>
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
      ))}
    </div>
  );

  const createLogs = () =>
    logs.map((log, index) => {
      const color = getLogColor(log.class);
      return (
        <div key={`${index}-company`}>
          <span style={{ color }}>{log.label}&nbsp;</span>
          {log.desc}
        </div>
      );
    });

  return (
    <div className={styles.container}>
      {!deckLoaded ? (
        <Deck />
      ) : (
        <div
          className={`${styles.content} animate__animated animate__bounceIn animate__faster`}
        >
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
              <Typist
                className={styles.wrapTypist}
                onTypingDone={displayRunTask}
              >
                <Typist.Delay
                  className={styles.wrapTypist}
                  ms={300}
                  avgTypingSpeed={50}
                />
                <span className={styles.typeLine}>
                  npm install work-experience --global
                </span>
                <br />
              </Typist>
              {!runTaskHidden && (
                <div>
                  <div className="task">
                    <div style={{ color: selectOptionClass }}>
                      &gt;&nbsp;All (Install all options)
                    </div>
                  </div>
                  {createLogs()}
                  {finalOutput && createFinalOutput()}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Experience;

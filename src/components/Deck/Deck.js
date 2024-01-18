import React from "react";
import { useSprings, animated, interpolate } from "@react-spring/web";
import javascript from "../../assets/javascript.svg";
import nodejs from "../../assets/nodejs.svg";
import react from "../../assets/react.svg";
import docker from "../../assets/docker.svg";
import mysql from "../../assets/mysql.svg";
import mongodb from "../../assets/mongodb.svg";
import serverless from "../../assets/serverless.svg";
import firebase from "../../assets/firebase.svg";
import aws from "../../assets/aws.svg";
import java from "../../assets/java.svg";
import knex from "../../assets/knex.svg";
import express from "../../assets/express.svg";
import angular from "../../assets/angular.svg";
import * as styles from "./Deck.module.scss";

const toolCards = [
  serverless,
  docker,
  firebase,
  mysql,
  react,
  mongodb,
  aws,
  express,
  knex,
  java,
  nodejs,
  angular,
  javascript,
];

const to = (i) => ({
  x: 0,
  y: i * -4,
  scale: 1,
  rot: -10 + Math.random() * 21,
  delay: i * 100,
});
const from = (i) => ({ x: 0, rot: 0, scale: 1.5, y: -950 });
const transform = (r, s) =>
  `perspective(1501px) rotateX(31deg) rotateY(${
    r / 10
  }deg) rotateZ(${r}deg) scale(${s})`;

const Deck = () => {
  const [props] = useSprings(toolCards.length, (i) => ({
    ...to(i),
    from: from(i),
  }));
  return props.map(({ x, y, rot, scale }, i) => (
    <animated.div
      key={i}
      style={{
        transform: interpolate(
          [x, y],
          (x, y) => `translate3d(${x}px,${y}px,0)`
        ),
      }}
      className={styles.wrapper}
    >
      <animated.img
        style={{
          transform: interpolate([rot, scale], transform),
        }}
        src={toolCards[i]}
        className={styles.item}
      />
    </animated.div>
  ));
};

export default Deck;

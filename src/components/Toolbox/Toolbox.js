import React from "react";
import * as styles from "./Toolbox.module.scss";
import javascript from "../../assets/javascript.svg";
import redux from "../../assets/redux.svg";
import nodejs from "../../assets/nodejs.svg";
import css3 from "../../assets/css3.svg";
import react from "../../assets/react.svg";
import html5 from "../../assets/html5.svg";
import azure from "../../assets/azure.svg";
import docker from "../../assets/docker.svg";
import webpack from "../../assets/webpack.svg";
import firebase from "../../assets/firebase.svg";
import material from "../../assets/material.svg";
import gatsby from "../../assets/gatsby.svg";
import redis from "../../assets/redis.svg";
import mongodb from "../../assets/mongodb.svg";
import angular from "../../assets/angular.svg";
import netlify from "../../assets/netlify.svg";
import aws from "../../assets/aws.svg";
import git from "../../assets/git.svg";
import java from "../../assets/java.svg";
import jenkins from "../../assets/jenkins.svg";
import mysql from "../../assets/mysql.svg";
import postgresql from "../../assets/postgresql.svg";
import spring from "../../assets/spring.svg";
import tomcat from "../../assets/tomcat.svg";
import express from "../../assets/express.svg";
import knex from "../../assets/knex.svg";
import serverless from "../../assets/serverless.svg";
import stimulus from "../../assets/stimulus.svg";

const Toolbox = () => {
  const images = [
    javascript,
    nodejs,
    express,
    aws,
    serverless,
    react,
    mongodb,
    redux,
    docker,
    firebase,
    gatsby,
    netlify,
    knex,
    css3,
    azure,
    html5,
    webpack,
    material,
    redis,
    angular,
    git,
    java,
    jenkins,
    mysql,
    postgresql,
    spring,
    stimulus,
    tomcat,
  ];

  return (
    <>
      <div className={styles.bg} />
      <div className={styles.bg2} />
      <div className={styles.bg3} />
      <div className={styles.container}>
        <div className={styles.grid}>
          {images.map((image, i) => {
            return (
              <img
                className={`${styles.img} animate__animated animate__jackInTheBox animate__slow`}
                src={image}
                alt={i}
                key={`skill-${i}`}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};
export default Toolbox;

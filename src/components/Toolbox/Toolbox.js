import React from "react";
import * as styles from "./Toolbox.module.scss";
import javascript from "../../assets/javascript.svg";
import redux from "../../assets/redux.svg";
import nodejs from "../../assets/nodejs.svg";
import vscode from "../../assets/vscode.svg";
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
import npm from "../../assets/npm.svg";
import angular from "../../assets/angular.svg";
import netlify from "../../assets/netlify.svg";
import aws from "../../assets/aws.svg";
import git from "../../assets/git.svg";
import java from "../../assets/java.svg";
import jenkins from "../../assets/jenkins.svg";
import mysql from "../../assets/mysql.svg";
import postgresql from "../../assets/postgresql.svg";
import spring from "../../assets/spring.svg";
import terminal from "../../assets/terminal.svg";
import tomcat from "../../assets/tomcat.svg";

const Toolbox = () => {
  const images = [
    javascript,
    redux,
    nodejs,
    vscode,
    css3,
    react,
    html5,
    azure,
    docker,
    webpack,
    firebase,
    material,
    gatsby,
    redis,
    mongodb,
    npm,
    angular,
    netlify,
    aws,
    git,
    java,
    jenkins,
    mysql,
    postgresql,
    spring,
    terminal,
    tomcat,
  ];

  return (
    <div className={styles.container}>
      <div className={styles.grid}>
        {images.map((image, i) => {
          return (
            <img
              className={`${styles.img} animate__animated animate__rubberBand`}
              src={image}
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

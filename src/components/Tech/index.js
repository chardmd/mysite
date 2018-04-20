import React from 'react'
//import StackGrid from 'react-stack-grid'
import './Tech.css'

import angularIcon from '../../assets/angular-icon.svg'
import aws from '../../assets/aws.svg'
import css3 from '../../assets/css-3.svg'
import git from '../../assets/git.svg'
import html5 from '../../assets/html-5.svg'
import java from '../../assets/java.svg'
import javascript from '../../assets/javascript.svg'
import jenkins from '../../assets/jenkins.svg'
import mongodb from '../../assets/mongodb.svg'
import mysql from '../../assets/mysql.svg'
import nodejs from '../../assets/nodejs.svg'
import npm from '../../assets/npm.svg'
import postgresql from '../../assets/postgresql.svg'
import redis from '../../assets/redis.svg'
import spring from '../../assets/spring.svg'
import terminal from '../../assets/terminal.svg'
import tomcat from '../../assets/tomcat.svg'

import azure from '../../assets/azure.svg'
import react from '../../assets/react.svg'
import vscode from '../../assets/vscode.svg'
import docker from '../../assets/docker.svg'
import firebase from '../../assets/firebase.svg'
import material from '../../assets/material.svg'
import gatsby from '../../assets/gatsby.svg'
import netlify from '../../assets/netlify.svg'
import redux from '../../assets/redux.svg'
import webpack from '../../assets/webpack.svg'

class Tech extends React.Component {
  render() {
    return (
      <div className="Tech">
        <div className="grid">
          <img src={javascript} alt="javascript" />
          <img src={react} alt="react" />
          <img src={redux} alt="redux" />
          <img src={css3} alt="css3" />
          <img src={html5} alt="html5" />
          <img src={azure} alt="azure" />
          <img src={vscode} alt="vscode" />
          <img src={docker} alt="docker" />
          <img src={webpack} alt="webpack" />
          <img src={firebase} alt="firebase" />
          <img src={material} alt="material" />
          <img src={gatsby} alt="gatsby" />
          <img src={nodejs} alt="nodejs" />
          <img src={redis} alt="redis" />
          <img src={mongodb} alt="mongodb" />
          <img src={npm} alt="npm" />
          <img src={angularIcon} alt="angular" />
          <img src={netlify} alt="netlify" />
          <img src={aws} alt="aws" />
          <img src={git} alt="git" />
          <img src={java} alt="java" />
          <img src={jenkins} alt="jenkins" />
          <img src={mysql} alt="mysql" />
          <img src={postgresql} alt="postgresql" />
          <img src={spring} alt="spring" />
          <img src={terminal} alt="terminal" />
          <img src={tomcat} alt="tomcat" />
        </div>
      </div>
    )
  }
}

export default Tech

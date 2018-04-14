import React from 'react'
import Typist from 'react-typist'
import './Terminal.css'

const Terminal = () => (
  <div className="Terminal">
    <div className="content">
      <ul className="bar">
        <li>
          <div className="red" />
        </li>
        <li>
          <div className="yellow" />
        </li>
        <li>
          <div className="green" />
        </li>
      </ul>
      <div className="screen">
        <div className="font">
          <span className="name">chardmd.com</span>@192.168.8.5:~$
          <Typist className="type">
            <Typist.Delay ms={2000} avgTypingDelay={50} />
            <span className="typeLine">
              npm install work-experience --global
            </span>
            <br />
          </Typist>
        </div>
      </div>
    </div>
  </div>
)

export default Terminal

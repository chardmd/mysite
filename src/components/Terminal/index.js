import React from 'react'
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
        <p className="font">chardmd.com@10.0.0.1:~$</p>
      </div>
    </div>
  </div>
)

export default Terminal

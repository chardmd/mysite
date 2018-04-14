import React from 'react'
import './Terminal.css'

const Terminal = () => (
  <div className="Terminal">
    <div className="content">
      <div className="bar">
        <div className="red" />
        <div className="yellow" />
        <div className="green" />
      </div>
      <div className="screen">
        <p className="font">chardmd.com@10.0.0.1:~$</p>
      </div>
    </div>
  </div>
)

export default Terminal
